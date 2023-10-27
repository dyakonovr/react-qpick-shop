import { Basket } from "../models/models";

class BasketController {
  async create(req, res) {
    const { name } = req.body;
    const basket = await Basket.create({ name });
    return res.json(basket);
  }

  async getAll(req, res) {
    const baskets = await Basket.findAll();
    return res.json(baskets);
  }
}

export const basketController = new BasketController();