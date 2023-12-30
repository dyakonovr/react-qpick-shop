import { Router } from "express";
import BasketController from "../../controllers/basket.controller.js";
import checkRoleMiddleware from "../../middleware/check-role.middleware.js";

const basketRouter = new Router();

basketRouter.post("/", checkRoleMiddleware("ADMIN"));
basketRouter.get("/:id", BasketController.getById);

export default basketRouter;