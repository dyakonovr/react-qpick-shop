import { Router } from "express";
import ProductController from "../../controllers/product/product.controller.js";
import checkRoleMiddleware from "../../middleware/check-role.middleware.js";

const productRouter = new Router();

productRouter.post("/", checkRoleMiddleware("ADMIN"), ProductController.create);
productRouter.get("/", ProductController.getAll);
productRouter.get("/:id", ProductController.getById);
productRouter.get("/similar/:id", ProductController.getSimilar);

export default productRouter;