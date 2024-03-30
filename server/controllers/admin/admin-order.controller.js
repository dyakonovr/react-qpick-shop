import { QueryTypes, col, fn, literal } from "sequelize";

import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { Order, Product, SellingItem, User } from "../../models/models.js";
import { sequelize } from "../../db.js";

class AdminOrderController {
  getAll = async (req, res, next) => {
    try {
      const filter = JSON.parse(req.query.filter || {});
      const range = JSON.parse(req.query.range || [0, 10]);
      const sort = JSON.parse(req.query.sort || []);

      const total = await Order.count();

      const whereFilter = Object.keys(filter).length === 0 ? "" : `WHERE ${Object.keys(filter)[0]} = ${Object.values(filter)[0]}`;
      const data = await sequelize.query(`
        SELECT
            o.id,
            o.created_at,
            COUNT(si.id) AS items_count,
            SUM(si.old_product_price) AS total
        FROM
            "orders" o
        JOIN
            "order_selling_items" osi ON o.id = osi."order_id"
        JOIN
            "selling_items" si ON osi."selling_item_id" = si.id
        ${whereFilter}
        GROUP BY
            o.id
        ORDER BY
            ${!["items_count", "total"].includes(sort[0]) ? `o.${sort[0]}` : sort[0]} ${sort[1]}
        OFFSET :offset
        LIMIT :limit;
      `, {
        replacements: { offset: range[0], limit: range[1] - range[0] + 1 },
        type: QueryTypes.SELECT
      });

      return res.json({ data, total });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const order = await Order.findOne({
        where: { id },
        attributes: {
          exclude: ["updated_at"],
        },
        include: [{ model: SellingItem }, { model: User, attributes: ["id", "email"] }]
      }).then(async order => {
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
          created_at: order.dataValues.created_at,
          user: order.dataValues.user,
          total: items.reduce(
            (accumulator, sellingItem) => accumulator + sellingItem.oldProductPrice * sellingItem.quantity,
            0,
          ),
          items
        };
      });

      if (order === null) next(ApiErrorHandler.internal("Ошибка при поиске заказа"));

      return res.json(order);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new AdminOrderController();