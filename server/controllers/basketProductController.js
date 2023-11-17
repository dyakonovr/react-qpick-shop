import { ApiError } from "../error/apiError.js";
import { BasketProduct } from "../models/models.js";

class BasketProductController {
  async create(req, res) {
    const { basketId, productId } = req.body;
    const basketProduct = await BasketProduct.create({ basketId, productId });
    const response = { id: basketProduct.id, productId: basketProduct.productId, quantity: basketProduct.quantity };
    return res.json(response);
  }

  async getAll(req, res) {
    const { basketId } = req.params;
    const basketProducts = await BasketProduct.findAll({
      where: { basketId },
      attributes: { exclude: ['basketId'] }
    });

    return res.json(basketProducts);
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const [_, updated] = await BasketProduct.update(req.body, { where: { id }, returning: true, plain: true });
      const { basketId, ...object } = updated.dataValues;
      return res.json(object);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await BasketProduct.destroy({ where: { id } });
      return res.json({done: true});
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

export const basketProductController = new BasketProductController();