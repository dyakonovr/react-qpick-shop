import { Basket } from "../models/models";

class BasketController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Basket.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Basket.findAll();
    return res.json(types);
  }
}

export const basketController = new BasketController();