import { ApiErrorHandler } from "../error/api-error.handler.js";
import { Category } from "../models/models.js";

class CategoryController {
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

  getAll = async (req, res, next) => {
    try {
      const categories = await Category.findAll();
      return res.json(categories);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new CategoryController();