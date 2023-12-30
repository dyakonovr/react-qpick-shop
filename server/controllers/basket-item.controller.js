import { ApiErrorHandler } from "../error/api-error.handler.js";
import { BasketItem } from "../models/models.js";

class BasketItemController {
  create = async (req, res, next) => {
    try {
      const { basketId, productId } = req.body;
      const basketProduct = await BasketItem.create({ basketId, productId });
      const {bsktId, ...response } = basketProduct;
      return res.json(response);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
   
  getAll = async (req, res) => {
    try {
      const { basketId } = req.params;
      const basketProducts = await BasketItem.findAll({
        where: { basketId },
        attributes: { exclude: ['basketId'] }
      });

      return res.json(basketProducts);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
   
  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const [_, updated] = await BasketItem.update(req.body, { where: { id }, returning: true, plain: true });
      const { basketId, ...object } = updated.dataValues;
      return res.json(object);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
   
  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await BasketItem.destroy({ where: { id } });
      return res.json({ done: true });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new BasketItemController();