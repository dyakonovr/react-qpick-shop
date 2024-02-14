import { hash, verify } from "argon2";

import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { Basket, User } from "../../models/models.js";
import { generateJWT } from './generate-jwt.helper.js';

class AuthController {
  registration = async (req, res, next) => {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) return next(ApiErrorHandler.notFound("Неккоректный email или пароль"));

      const candidate = await User.findOne({ where: { email } });
      if (candidate) return next(ApiErrorHandler.badRequest("Пользователь с таким email уже существует"));

      const hashPassword = await hash(password);
      const user = await User.create({ email, role: (role || "USER"), password: hashPassword });

      await Basket.create({ user_id: user.id });
      const tokens = this.issueTokens(user.id, user.role, user.email);

      return res.json({ user: this.returnUserFields(user), ...tokens });
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

      const tokens = this.issueTokens(user.id, user.role, user.email);
      return res.json({ user: this.returnUserFields(user), ...tokens });
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  }

  getNewTokens = (req, res, next) => {
    try {
      const tokens = this.issueTokens(req.user.id, req.user.role, req.user.email);
      return res.json({ user: this.returnUserFields(req.user), ...tokens });
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
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