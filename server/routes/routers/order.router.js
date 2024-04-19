import { Router } from "express";
import { isAuthMiddleware } from './../../middleware/is-auth.middleware.js';
import OrderController from "../../controllers/order.controller.js";

const orderRouter = new Router();

orderRouter.post("/", isAuthMiddleware, OrderController.create);

export default orderRouter;