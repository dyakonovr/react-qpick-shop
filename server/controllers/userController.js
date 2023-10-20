import { ApiError } from "../error/apiError.js";
import { Basket, User } from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function generateJWT(id, email, role) {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: "24h" });
}

class UserController {
  async registration(req, res) {
    const { email, password, role } = req.body;
    if (!email || !password) return next(ApiError.badRequest("Неккоректный email или пароль"));

    const candidate = await User.findOne({ where: { email } });

    if (candidate) return next(ApiError.badRequest("Пользователь с таким email уже существует"));

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });

    const token = generateJWT(user.id, email, user.role);
    
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email } });
    if (!user) return next(ApiError.internal("Такого пользователя не найдено"));

    const comparePassword = bcrypt.compare(password, user.password);
    if (!comparePassword) return next(ApiError.internal("Указан неверный пароль"));

    const token = generateJWT(user.id, email, user.role);
    return res.json({ token });
  }

  async isAuth(req, res, next) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

export const userController = new UserController();