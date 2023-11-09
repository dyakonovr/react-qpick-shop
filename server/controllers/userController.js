import { ApiError } from "../error/apiError.js";
import { Basket, User } from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function generateJWT(id, email, role) {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: "24h" });
}

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;
      const defaultRole = "USER";
      if (!email || !password) return next(ApiError.badRequest("Неккоректный email или пароль"));

      const candidate = await User.findOne({ where: { email } });

      if (candidate) return next(ApiError.badRequest("Пользователь с таким email уже существует"));

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role: (role || defaultRole), password: hashPassword });
      const basket = await Basket.create({ userId: user.id });

      const token = generateJWT(user.id, email, user.role);

      return res.json({ token, role: user.role, id: user.id });
    } catch (error) {
      return next(ApiError.badRequest(error));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) return next(ApiError.internal("Такого пользователя не найдено"));

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) return next(ApiError.internal("Указан неверный пароль"));

      const token = generateJWT(user.id, email, user.role);
      return res.json({ token, role: user.role, id: user.id });
    } catch (error) {
      return next(ApiError.badRequest(error));
    }
  }

  async isAuth(req, res) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json({ token, role: req.user.role, id: req.user.id });
  }
}

export const userController = new UserController();