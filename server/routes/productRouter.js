import { Router } from "express";
import { productController } from "../controllers/productController.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";

const productRouter = new Router();

productRouter.post("/", checkRoleMiddleware("ADMIN") , productController.create);
productRouter.get("/", productController.getAll);
productRouter.get("/:id", productController.getOne);

export default productRouter;