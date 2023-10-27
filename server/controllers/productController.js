import { ApiError } from "../error/apiError.js";
import { Product } from "../models/models.js";

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, categoryId, info, rating, imgs } = req.body;
      const product = await Product.create({ name, price, categoryId, info, rating, imgs });

      return res.json(product);
    }

    catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    // let { categoryId, limit, page } = req.query;
    // limit = limit || 10;
    // page = page || 1;
    // offset = page * limit - limit;

    // let products;

    // if (categoryId) products = await Product.findAndCountAll({ where: { categoryId }, limit, offset });
    // else products = await Product.findAndCountAll({limit, offset});
    // else products = await Product.findAndCountAll();

    const products = await Product.findAll();
    return res.json(products);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });

    return res.json(product);
  }
}

export const productController = new ProductController();