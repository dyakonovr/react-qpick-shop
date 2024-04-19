import { Router } from "express";
import BasketController from "../../controllers/basket.controller.js";
import { isAuthMiddleware } from './../../middleware/is-auth.middleware.js';

const basketRouter = new Router();

basketRouter.post("/create/:userId", BasketController.create);
basketRouter.get("/", isAuthMiddleware, BasketController.getById);

export default basketRouter;