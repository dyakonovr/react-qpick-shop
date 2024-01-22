import { ApiErrorHandler } from "../error/api-error.handler.js";
import { Product, User } from "../models/models.js";
import { formatProductsForCard } from "./product/product.helper.js";

class FavouritesController {
  getAll = async (req, res, next) => {
    try {
      const { id } = req.user;
      const user = await User.findByPk(id);

      if (!user) return next(ApiErrorHandler.notFound("Пользователь не найден"));

      const favourites = await user.getProducts();

      const productsWithoutFavourites = favourites.map(({ dataValues }) => {
        const { favourites, ...rest } = dataValues; // favourites - объект, связывающий пользователя и товар из соответствующей таблицы
        return rest;
      });

      return res.json(formatProductsForCard(productsWithoutFavourites));
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  };

  create = async (req, res, next) => {
    try {
      const { id } = req.user;
      const { productId } = req.params;

      const user = await User.findByPk(id);
      if (!user) return next(ApiErrorHandler.notFound("Такого пользователя не найдено"));

      const product = await Product.findByPk(productId);
      if (!product) return next(ApiErrorHandler.notFound("Такого продукта не найдено"));

      await user.addProduct(product);
      return res.json(formatProductsForCard(product));
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.user;
      const { productId } = req.params;

      const user = await User.findByPk(id);
      if (!user) return next(ApiErrorHandler.notFound("Такого пользователя не найдено"));

      const product = await Product.findByPk(productId);
      if (!product) return next(ApiErrorHandler.notFound("Такого продукта не найдено"));

      await user.removeProduct(product);
      return res.json({ productId: product.id });
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  };
}

export default new FavouritesController();