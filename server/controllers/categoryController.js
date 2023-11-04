import { Category } from "../models/models.js";

class CategoryController {
  async create(req, res) {
    const { name } = req.body;
    const category = await Category.create({ name });
    return res.json(category);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const category = await Category.findOne({ where: { id } });

    return res.json(category);
  }

  async getAll(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }
}

export const categoryController = new CategoryController();