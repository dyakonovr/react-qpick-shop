import { hash, verify } from "argon2";
import jwt from 'jsonwebtoken';

import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { Basket, User } from "../../models/models.js";
import { generateJWT } from './generate-jwt.helper.js';
import FavouritesController from "../favourites.controller.js";
import OrderController from "../order.controller.js";
import BasketController from "../basket.controller.js";

class AuthController {
  registration = async (req, res, next) => {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) return next(ApiErrorHandler.notFound("Неккоректный email или пароль"));

      const candidate = await User.findOne({ where: { email } });
      if (candidate) return next(ApiErrorHandler.internal("Пользователь с таким email уже существует"));

      const hashPassword = await hash(password);
      const user = await User.create({ email, role: (role || "USER"), password: hashPassword });

      const basket = await BasketController.create(user.id);
      const tokens = this.issueTokens(user.id, user.role, user.email);

      return res.json({
        user: this.returnUserFields(user),
        basket: {
          id: basket.id,
          products: []
        },
        favourites: [],
        orders: [],
        ...tokens
      });
    } catch (error) {
      return next(ApiErrorHandler.internal(error));
    }
  }
   
  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) return next(ApiErrorHandler.notFound("Такого пользователя не найдено"));

      const comparePassword = await verify(user.password, password);
      if (!comparePassword) return next(ApiErrorHandler.forbidden("Указан неверный пароль"));

      const favourites = await FavouritesController.getAll(user.id);
      const basket = await BasketController.getById(user.id);
      const orders = await OrderController.getAll(user.id);

      const tokens = this.issueTokens(user.id, user.role, user.email);
      return res.json({ user: this.returnUserFields(user), favourites, basket, orders, ...tokens });
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  }

  getNewTokens = async (req, res, next) => {
    try {
      const accessToken = req.headers.authorization.split(' ')[1]; // Удаляю Bearer
      if (!accessToken) return next(ApiErrorHandler.forbidden("Не авторизован"));

      const { id, role, email } = jwt.verify(accessToken, process.env.SECRET_KEY);

      const tokens = this.issueTokens(id, role, email);

      const favourites = await FavouritesController.getAll(id);
      const basket = await BasketController.getById(id);
      const orders = await OrderController.getAll(id);

      return res.json({ user: { id, role, email }, favourites, basket, ...orders, ...tokens });
    } catch (error) {
      return next(ApiErrorHandler.forbidden(error.message));
    }
  }

  returnUserFields = (user) => {
    if ("dataValues" in user) user = user.dataValues;

    return { id: user.id, email: user.email, role: user.role };
  }

  issueTokens = (userId, userRole, userEmail) => {
    const data = { id: userId, role: userRole, email: userEmail };

    const accessToken = generateJWT(data, "1h");
    const refreshToken = generateJWT(data, "7d");

    return { accessToken, refreshToken };
  }
}

export default new AuthController();