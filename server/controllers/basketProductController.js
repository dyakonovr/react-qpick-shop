import { BasketProduct } from "../models/models.js";

class BasketProductController {
  async create(req, res) {
    const { basketId, productId } = req.body;
    const basketProduct = await BasketProduct.create({ basketId, productId });
    const response = { id: basketProduct.id, productId: basketProduct.productId };
    return res.json(response);
  }

  async getAll(req, res) {
    const { id } = req.params;
    const basketProducts = await BasketProduct.findAll({
      where: { basketId: id },
      attributes: { exclude: ['basketId'] }
    });
    return res.json(basketProducts);
  }
}

export const basketProductController = new BasketProductController();