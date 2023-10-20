import { ApiError } from "../error/apiError.js";
import { Product } from "../models/models.js";

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, typeId, info, rating, imgs } = req.body;
      const product = await Product.create({ name, price, typeId, info, rating, imgs });

      return res.json(product);
    }

    catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    limit = limit || 10;
    page = page || 1;
    offset = page * limit - limit;

    let products;

    if (typeId) products = await Product.findAndCountAll({ where: { typeId }, limit, offset });
    else products = await Product.findAndCountAll({limit, offset});

    return res.json(products);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });

    return res.json(product);
  }
}

export const productController = new ProductController();