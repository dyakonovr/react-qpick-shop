import { Router } from "express";
import ProductController from "../../controllers/product/product.controller.js";
import checkRoleMiddleware from "../../middleware/check-role.middleware.js";

const productRouter = new Router();

productRouter.post("/create", checkRoleMiddleware("ADMIN"), ProductController.create);
productRouter.post("/get-all", ProductController.getAll);
productRouter.get("/:id", ProductController.getById);
productRouter.get("/similar/:id", ProductController.getSimilar);

export default productRouter;