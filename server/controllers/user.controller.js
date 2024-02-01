import { Product, User } from "../models/models.js";
import { ApiErrorHandler } from "../error/api-error.handler.js";

class UserController {
  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findOne(
        {
          where: { id },
          attributes: {
            exclude: ["password"]
          }
        }
      );

      if (!user) return next(ApiErrorHandler.notFound("Такого пользователя не найдено"));
      
      // const favourites = await user.getProducts();

      // const productsWithoutFavourites = favourites.map(({ dataValues }) => {
      //   const { favourites, ...rest } = dataValues; // favourites - объект, связывающий пользователя и товар из соответствующей таблицы
      //   return rest;
      // });

      // return res.json({ user, favourites: formatProductsForCard(productsWithoutFavourites) })
      return res.json(user);
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  };

  // toggleFavourite = async (req, res, next) => {
  //   try {
  //     const { id } = req.user;
  //     const { productId } = req.params;

  //     const user = await User.findByPk(id);
  //     if (!user) return next(ApiErrorHandler.notFound("Такого пользователя не найдено"));

  //     const product = await Product.findByPk(productId);
  //     if (!product) return next(ApiErrorHandler.notFound("Такого продукта не найдено"));

  //     const favouriteProducts = await user.getProducts();
  //     const isFavourite = favouriteProducts.some(product => product.id === parseInt(productId, 10));

  //     if (isFavourite) {
  //       await user.removeProduct(product);
  //       return res.json({ message: 'Продукт удален из избранного', added: false });
  //     } else {
  //       await user.addProduct(product);
  //       return res.json({ message: 'Продукт добавлен в избранное', added: true });
  //     }
  //   } catch (error) {
  //     return next(ApiErrorHandler.internal(error.message));
  //   }
  // };

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      await user.destroy();

      return res.status(200).json({ done: true });
    } catch (error) {
      return next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new UserController();