import { Router } from "express";

import { isAuthMiddleware } from "../../middleware/is-auth.middleware.js";
import FavouritesController from "../../controllers/favourites.controller.js";

const favouritesRouter = new Router();

favouritesRouter.get("/", isAuthMiddleware, FavouritesController.getAll);
favouritesRouter.post("/:productId", isAuthMiddleware, FavouritesController.create);
favouritesRouter.delete("/:productId", isAuthMiddleware, FavouritesController.delete);

export default favouritesRouter;