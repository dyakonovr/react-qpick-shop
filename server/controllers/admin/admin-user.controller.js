import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { User } from "../../models/models.js";

class AdminUserController {
  getAll = async (req, res, next) => {
    try {
      const range = JSON.parse(req.query.range || [0, 10]);
      const sort = JSON.parse(req.query.sort || []);

      const users = await User.findAndCountAll({
        offset: range[0],
        limit: range[1] - range[0] + 1,
        order: [sort]
      });
      return res.json({ data: users.rows, total: users.count });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  create = async (req, res, next) => {
    try {
      const { name, role } = req.body;
      const category = await User.create({ name, role });
      return res.json(category);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, { attributes: ["role", "id", "email"] });

      if (!user) return next(ApiErrorHandler.notFound("Такого пользователя не найдено"));

      return res.json(user);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { email, role } = req.body;
      const user = await User.findByPk(id, { attributes: ["role", "id", "email"] });

      if (!user) return next(ApiError.internal("Такого пользователя не найдено"));

      user.email = email;
      user.role = role;
      await user.save();

      return res.json(user);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getMany = async (req, res, next) => {
    try {
      const filter = JSON.parse(req.query.filter);
      const user = await User.findAll({ where: { id: filter.ids } });
      return res.json({ data: user });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new AdminUserController();