import { literal } from "sequelize";

import { ApiErrorHandler } from "../error/api-error.handler.js";
import { Basket, BasketItem, Order, OrderSellingItem, SellingItem } from "../models/models.js";

class OrderController {
  getAll = async (userId) => {
    try {
      if (!userId) throw ApiErrorHandler.internal("Попробуйте перезайти в аккаунт");

      const orders = await Order.findAll({
        where: { user_id: userId },
        attributes: {
          exclude: ["user_id", "updated_at", "created_at"],
          include: [[literal('"created_at"'), "createdAt"]]
        },
        include: [SellingItem]
      }).then(async orders => {
        return orders.map(order => {
          const items = order.selling_items.map(si => ({
            id: si.id,
            oldProductPrice: si.dataValues.old_product_price,
            oldProductName: si.dataValues.old_product_name,
            oldProductImage: si.dataValues.old_product_image,
            quantity: si.order_selling_item.quantity,
            productId: si.dataValues.product_id
          }));

          return {
            id: order.id,
            createdAt: order.dataValues.createdAt,
            total: items.reduce(
              (accumulator, sellingItem) => accumulator + sellingItem.oldProductPrice * sellingItem.quantity,
              0,
            ),
            items
          };
        })
      });

      if (!orders) throw ApiErrorHandler.internal("Ошибка при поиске заказов");

      return { orders };
    } catch (error) {
      return ApiErrorHandler.internal(error.message);
    }
  }

  create = async (req, res, next) => {
    try {
      const { items } = req.body;
      const { id: userId } = req.user;

      const order = await Order.create({ user_id: userId });
      const response = {
        id: order.id,
        createdAt: order.dataValues.created_at,
        total: 0,
        items: []
      };

      for (const item of items) {
        let sellingItem = await SellingItem.findOne({
          where: {
            product_id: item.product.id,
            old_product_name: item.product.name,
            old_product_price: item.product.price,
            old_product_image: item.product.image,
          }
        });

        // Если sellingItem с конкретными параметрами не найден
        // создаем новый
        if (sellingItem === null) {
          sellingItem = await SellingItem.create({
            old_product_name: item.product.name,
            old_product_price: item.product.price,
            old_product_image: item.product.image,
            product_id: item.product.id,
          });
        }

        // Иначе обновляем флаг у существующего
        else {
          sellingItem.is_active = true;
          await sellingItem.save();
        }

        const activeSellingItem = await SellingItem.findOne({ where: { product_id: item.product.id, is_active: true } });
        if (activeSellingItem !== null && activeSellingItem.id !== sellingItem.id) {
          activeSellingItem.is_active = false;
          await activeSellingItem.save();
        }

        await OrderSellingItem.create({ order_id: order.id, selling_item_id: sellingItem.id, quantity: item.quantity });

        response.items.push({
          oldProductName: item.product.name,
          oldProductPrice: item.product.price,
          oldProductImage: item.product.image,
          productId: item.product.id,
          quantity: item.quantity,
        });

        response.total += item.product.price * item.quantity;
      }

      const basket = await Basket.findOne({ where: { user_id: userId } });
      await BasketItem.destroy({ where: { basket_id: basket.id } });

      return res.json(response);
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new OrderController();