import { ApiErrorHandler } from "../error/api-error.handler.js";
import { Basket } from "../models/models.js";

class BasketController {
  create = async (req, res, next) => {
    try {
      const { name } = req.body;
      const basket = await Basket.create({ name });
      return res.json(basket);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
  
  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const basket = await Basket.findByPk(id);
      if (!basket) next(ApiErrorHandler.notFound("Такой корзины не найдено"));

      return res.json(basket);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
   
  getAll = async (req, res, next) => {
    try {
      const baskets = await Basket.findAll();
      return res.json(baskets);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new BasketController();