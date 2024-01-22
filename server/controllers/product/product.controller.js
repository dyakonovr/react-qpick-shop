import { Op } from "sequelize";
import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { generateSlug } from "../../helpers/generate-slug.helper.js";
import { Category, Product } from "../../models/models.js";
import { formatProductsForCard } from "./product.helper.js";

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
      const product = await Product.findByPk(id);

      if (!product) return next(ApiErrorHandler.notFound("Продукт не найден"));

      return res.json(product);
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
      const page = parseInt(req.query.page) || 1; // Получаем номер страницы из запроса или устанавливаем значение по умолчанию
      const perPage = parseInt(req.query.perPage) || 10; // Количество элементов на странице по умолчанию

      const offset = (page - 1) * perPage; // Вычисляем смещение

      const products = await Product.findAndCountAll({ limit: perPage, offset });

      const totalPages = Math.ceil(products.count / perPage); // Вычисляем общее количество страниц

      return res.json({
        products: formatProductsForCard(products.rows),
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