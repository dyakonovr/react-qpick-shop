import { ApiErrorHandler } from "../error/api-error.handler.js";
import { BasketItem, Product } from "../models/models.js";

class BasketItemController {
  create = async (req, res, next) => {
    try {
      const { basketId, productId } = req.body;

      const bi = await BasketItem.create({ basket_id: basketId, product_id: productId });

      const basketItem = await BasketItem.findOne(
        {
          where: { id: bi.id },
          attributes: { exclude: ['basket_id', 'product_id'] },
          include: {
            model: Product,
            attributes: { exclude: ['slug', 'rating', 'info', 'category_id'] }
          },
        }
      )

      return res.json(basketItem);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      await BasketItem.update(req.body, { where: { id } });
      return res.json();
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await BasketItem.destroy({ where: { id } });
      return res.json();
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new BasketItemController();