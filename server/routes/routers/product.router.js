import { Router } from "express";
import ProductController from "../../controllers/product/product.controller.js";

const productRouter = new Router();

productRouter.post("/get-all", ProductController.getAll);
productRouter.get("/:id", ProductController.getById);

export default productRouter;