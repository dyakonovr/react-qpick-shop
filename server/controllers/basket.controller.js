import { ApiErrorHandler } from "../error/api-error.handler.js";
import { Basket, BasketItem, Product } from "../models/models.js";
import { formatBasketItemData } from "./basket-item/basket-item.helper.js";

class BasketController {
  create = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const basket = await Basket.create({ user_id: userId });
      return res.json(basket);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getById = async (req, res, next) => {
    try {
      const { id } = req.user;
      if (!id) next(ApiErrorHandler.notFound("Не указан id пользователя"));

      const basket = await Basket.findOne({ where: { user_id: id } });

      if (!basket) next(ApiErrorHandler.notFound("Такой корзины не найдено"));

      const basketItems = await BasketItem.findAll({
        where: { basket_id: basket.id },
        attributes: { exclude: ['basket_id', 'product_id'] },
        include: {
          model: Product,
          attributes: { exclude: ['slug', 'rating', 'info', 'category_id'] }
        },
      });

      const formattedBasketItems = basketItems.map(formatBasketItemData);

      return res.json({
        id: basket.id,
        products: formattedBasketItems
      });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new BasketController();