import { User } from "../models/models.js";
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
}

export default new UserController();