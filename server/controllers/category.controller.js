import { ApiErrorHandler } from "../error/api-error.handler.js";
import { generateSlug } from "../helpers/generate-slug.helper.js";
import { Category } from "../models/models.js";

class CategoryController {
  create = async (req, res, next) => {
    try {
      const { name } = req.body;
      const category = await Category.create({ name, slug: generateSlug(name) });
      return res.json(category);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
  
  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) return next(ApiErrorHandler.notFound("Такой категории не найдено"));

      return res.json(category);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
   
  getBySlug = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const category = await Category.findOne({ where: { slug } });

      if (!category) return next(ApiErrorHandler.notFound("Такой категории не найдено"));

      return res.json(category);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await Category.findByPk(id);

      if (!category) return next(ApiError.internal("Такой категории не найдено"));

      category.name = name;
      category.slug = generateSlug(name);
      await category.save();

      return res.json(category);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getAll = async (req, res, next) => {
    try {
      const categories = await Category.findAll();
      return res.json(categories);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      await category.destroy();

      return res.json({ done: true });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new CategoryController();