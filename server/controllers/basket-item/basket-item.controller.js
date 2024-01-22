import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { BasketItem, Product } from "../../models/models.js";
import { formatBasketItemData } from "./basket-item.helper.js";

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

      return res.json(formatBasketItemData(basketItem));
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      await BasketItem.update(req.body, { where: { id }});
      // const [_, updated] = await BasketItem.update(req.body, { where: { id }, returning: true, plain: true });
      // const { basketId, ...object } = updated.dataValues;
      // return res.json(object);
      return res.json();
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  // updateQuantity = async (req, res, next) => {
  //   try {
  //     const { baske } = req.params;
  //     const basketProduct = await BasketItem.create({ basket_id: basketId, product_id: productId });
  //     const { bsktId, ...response } = basketProduct;
  //     return res.json(basketProduct);
  //   } catch (error) {
  //     next(ApiErrorHandler.internal(error.message));
  //   }
  // } 

  // getAll = async (req, res, next) => {
  //   try {
  //     const { basketId } = req.params;

  //     const basketItems = await BasketItem.findAll({
  //       where: { basket_id: basketId },
  //       attributes: { exclude: ['basket_id', 'product_id'] },
  //       include: {
  //         model: Product,
  //         attributes: { exclude: ['slug', 'rating', 'info', 'category_id'] }
  //       },
  //     });

  //     const formattedBasketItems = basketItems.map(formatBasketItemData);

  //     return res.json(formattedBasketItems);
  //   } catch (error) {
  //     next(ApiErrorHandler.internal(error.message));
  //   }
  // }

  // getAll = async (basketId) => {
  //   try {
      

  //     return formattedBasketItems;
  //   } catch (error) {
  //     ApiErrorHandler.internal(error.message);
  //   }
  // }

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