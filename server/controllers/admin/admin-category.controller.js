import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { generateSlug } from "../../helpers/generate-slug.helper.js";
import { Category } from "../../models/models.js";

class AdminCategoryController {
  getAll = async (req, res, next) => {
    try {
      const range = JSON.parse(req.query.range || [0, 10]);
      const sort = JSON.parse(req.query.sort || []);

      const categories = await Category.findAndCountAll({
        attributes: { exclude: ["slug"] },
        offset: range[0],
        limit: range[1] - range[0] + 1,
        order: [sort]
      });
      return res.json({ data: categories.rows, total: categories.count });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getMany = async (req, res, next) => {
    try {
      const filter = JSON.parse(req.query.filter);
      const categories = await Category.findAll({ attributes: { exclude: ["slug"] }, where: { id: filter.ids } });
      return res.json({ data: categories });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

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

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      await category.destroy();

      return res.json({ data: category });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  deleteMany = async (req, res, next) => {
    try {
      const filter = JSON.parse(req.query.filter);
      const categories = await Category.findAll({ where: filter });
      console.log("@categories", categories);

      for (let index = 0; index < categories.length; index++) {
        categories[index].destroy();
      }

      return res.json({ data: categories });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new AdminCategoryController();