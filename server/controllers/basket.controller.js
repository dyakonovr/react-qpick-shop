import { ApiErrorHandler } from "../error/api-error.handler.js";
import { Basket, BasketItem, Product } from "../models/models.js";

class BasketController {
  create = async (userId) => {
    try {
      const basket = await Basket.create({ user_id: userId });
      return basket;
    } catch (error) {
      return ApiErrorHandler.internal(error.message);
    }
  }

  getById = async (userId) => {
    try {
      if (!userId) throw ApiErrorHandler.notFound("Не указан id пользователя");

      const basket = await Basket.findOne({ where: { user_id: userId } });

      if (!basket) throw ApiErrorHandler.notFound("Такой корзины не найдено");

      const basketItems = await BasketItem.findAll({
        where: { basket_id: basket.id },
        attributes: { exclude: ['basket_id', 'product_id'] },
        include: {
          model: Product,
          attributes: { exclude: ['slug', 'rating', 'info', 'category_id'] }
        },
      });


      return {
          id: basket.id,
          products: basketItems
      };
    } catch (error) {
      return ApiErrorHandler.internal(error.message);
    }
  }
}

export default new BasketController();