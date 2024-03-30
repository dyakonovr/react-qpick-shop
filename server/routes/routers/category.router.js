import { Router } from "express";

import CategoryController from "../../controllers/category.controller.js";

const categoryRouter = new Router();

categoryRouter.get("/:id", CategoryController.getById);
categoryRouter.get("/", CategoryController.getAll);

export default categoryRouter;