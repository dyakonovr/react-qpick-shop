import { Router } from "express";
import BasketItemController from "../../controllers/basket-item.controller.js";
import checkRoleMiddleware from './../../middleware/check-role.middleware.js';

const basketItemRouter = new Router();

basketItemRouter.post("/", checkRoleMiddleware("ADMIN"), BasketItemController.create);
basketItemRouter.get("/:basketId", BasketItemController.getAll);
basketItemRouter.patch("/:id", BasketItemController.update);
basketItemRouter.delete("/:id", BasketItemController.delete);

export default basketItemRouter;