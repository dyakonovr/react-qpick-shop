import { Op } from "sequelize";

import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { Category, Product, ProductCharacteristic, ProductImage } from "../../models/models.js";
import { getFilters } from "./helpers/product-filter.helper.js";
import { getOrderArray } from './helpers/get-order-array.helper.js';

class ProductController {
  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id,
        {
          include: [
            {
              model: Category,
            },
            {
              model: ProductImage,
              attributes: { exclude: ["id", "product_id"] },
            },
            {
              model: ProductCharacteristic,
              attributes: { exclude: ["id", "product_id"] },
            },
          ],
          attributes: { exclude: ["category_id"] }
        }
      );

      if (!product) return next(ApiErrorHandler.notFound("Продукт не найден"));

      const similarProducts = await Product.findAll({
        where: {
          category_id: product.category.id,
          id: { [Op.ne]: id }
        },
        attributes: { exclude: ["category_id"] },
        limit: 3
      });

      const { categories, product_images: gallery, product_characteristics: info, ...restProductData } = product.dataValues;
      return res.json({
        product: {
          ...restProductData,
          categoryName: product.category.name,
          gallery: product.product_images.map(obj => obj.url),
          info,
        },
        similarProducts
      });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getAll = async (req, res, next) => {
    try {
      const page = parseInt(req.body.page) || 1;
      const perPage = parseInt(req.body.perPage) || 9;
      const offset = (page - 1) * perPage; // Вычисляем смещение

      const sort = req.body.sort;
      const orderArray = getOrderArray(sort);

      const { filters, searchTerm } = req.body;
      const [whereOption, includeOption] = await getFilters(filters, searchTerm);
      const config = {
        limit: perPage,
        offset,
        attributes: { exclude: ["category_id"] }
      };

      if (whereOption) {
        config.where = whereOption;
      }

      if (Object.keys(includeOption).length !== 0) {
        config.include = includeOption;
      }

      if (orderArray) {
        config.order = [orderArray];
      }

      const products = await Product.findAndCountAll(config).then(result => {
        result.rows = result.rows.map(({ dataValues }) => {
          const { category, ...rest } = dataValues;
          return rest;
        })
        return result;
      });

      const totalPages = Math.ceil(products.count / perPage); // Вычисляем общее количество страниц

      return res.json({
        products: products.rows,
        totalPages,
        currentPage: page,
      });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new ProductController();