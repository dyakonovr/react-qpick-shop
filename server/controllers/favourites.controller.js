import { ApiErrorHandler } from "../error/api-error.handler.js";
import { Product, User } from "../models/models.js";

class FavouritesController {
  getAll = async (userId) => {
    try {
      const user = await User.findByPk(userId);

      if (!user) throw ApiErrorHandler.notFound("Пользователь не найден");

      const favourites = await user.getProducts({
        attributes: { exclude: ["category_id"] }
      });

      const productsWithoutFavourites = favourites.map(({ dataValues }) => {
        // favourites - объект, связывающий пользователя и товар из соответствующей таблицы
        const { favourites, ...rest } = dataValues;
        return rest;
      });

      return productsWithoutFavourites;
    } catch (error) {
      return ApiErrorHandler.internal(error.message);
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
      return res.json(product);
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
      return res.json();
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  };
}

export default new FavouritesController();