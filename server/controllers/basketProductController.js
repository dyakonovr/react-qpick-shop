import { BasketProduct } from "../models/models";

class BasketProductController {
  async create(req, res) {
    const { name } = req.body;
    const type = await BasketProduct.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await BasketProduct.findAll();
    return res.json(types);
  }
}

export const basketProductController = new BasketProductController();