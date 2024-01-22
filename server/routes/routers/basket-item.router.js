import { Router } from "express";
import BasketItemController from "../../controllers/basket-item/basket-item.controller.js";
import { isAuthMiddleware } from './../../middleware/is-auth.middleware.js';

const basketItemRouter = new Router();

basketItemRouter.post("/", isAuthMiddleware, BasketItemController.create);
// basketItemRouter.get("/:basketId", BasketItemController.getAll);
basketItemRouter.patch("/update-quantity/:id", BasketItemController.update);
// basketItemRouter.patch("/:id", BasketItemController.update);
basketItemRouter.delete("/:id", BasketItemController.delete);

export default basketItemRouter;