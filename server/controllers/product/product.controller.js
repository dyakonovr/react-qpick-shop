import { Op } from "sequelize";

import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { Category, Product, ProductCharacteristic, ProductImage } from "../../models/models.js";
import { getFilters } from "./product.helper.js";
import { generateSlug } from "../../helpers/generate-slug.helper.js";

class ProductController {
  create = async (req, res, next) => {
    try {
      const { name, price, categoryId, info, rating, imgs } = req.body;
      const product = await Product.create({ name, price, categoryId, info, rating, imgs, slug: generateSlug(name) });

      return res.json(product);
    } catch (e) {
      next(ApiErrorHandler.internal(e.message));
    }
  }

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id,
        {
          include: [
            {
              model: Category,
              attributes: { exclude: ["slug"] }
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
          attributes: { exclude: ["category_id", "slug"] }
        }
      );

      if (!product) return next(ApiErrorHandler.notFound("Продукт не найден"));

      const { categories, product_images: gallery, product_characteristics: info, ...restProductData } = product.dataValues;
      return res.json({
        ...restProductData,
        category: product.category.name,
        gallery: product.product_images.map(obj => obj.url),
        info
      });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getBySlug = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const product = await Product.findOne({ where: { slug } });

      if (!product) return next(ApiErrorHandler.notFound("Продукт не найден"));

      return res.json(product);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getByCategory = async (req, res, next) => {
    try {
      const { categorySlug } = req.params;
      const product = await Product.findMany({
        include: [{
          model: Category,
          where: { slug: categorySlug }
        }]
      });

      if (!product) return next(ApiErrorHandler.notFound("Продукт не найден"));

      return res.json(product);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getSimilar = async (req, res, next) => {
    try {
      const { id } = req.params;
      const currentProduct = await Product.findByPk(id);

      if (!currentProduct) return next(ApiErrorHandler.notFound("Продукт не найден"));

      const products = await Product.findAll({
        where: {
          category: { id: currentProduct.category_id },
          id: { [Op.ne]: id }
        }
      });

      return res.json(products);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getAll = async (req, res, next) => {
    try {
      const page = parseInt(req.body.page) || 1;
      const perPage = parseInt(req.body.perPage) || 9;
      const offset = (page - 1) * perPage; // Вычисляем смещение

      const { filters, searchTerm } = req.body;
      const [whereOption, includeOption] = await getFilters(filters, searchTerm);
      const config = {
        limit: perPage,
        offset,
        attributes: { exclude: ["slug", "category_id"] }
      };

      if (whereOption) {
        config.where = whereOption;
      }

      if (Object.keys(includeOption).length !== 0) {
        config.include = [
          {
            model: ProductImage,
            attributes: { exclude: ["id", "product_id"] },
          },
          {
            model: ProductCharacteristic,
            attributes: { exclude: ["id", "product_id"] },
          },
          includeOption
        ];
      }

      const products = await Product.findAndCountAll(config);

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

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      // TODO Доделать обновление
      const { name } = req.body;
      const product = await Product.findByPk(id);

      if (!product) return next(ApiErrorHandler.notFound("Такого продукта не найдено"));

      product.name = name;
      product.slug = generateSlug(name);
      await product.save();

      return res.json(product);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) return next(ApiErrorHandler.notFound("Такого продукта не найдено"));

      await product.destroy();

      return res.json({ done: true });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new ProductController();