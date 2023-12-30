import { Router } from "express";

import CategoryController from "../../controllers/category.controller.js";
import checkRoleMiddleware from "../../middleware/check-role.middleware.js";

const categoryRouter = new Router();

categoryRouter.post("/", checkRoleMiddleware("ADMIN"), CategoryController.create);
categoryRouter.get("/:id", CategoryController.getById);
categoryRouter.get("/:slug", CategoryController.getBySlug);
categoryRouter.post("/update/:id", CategoryController.update);
categoryRouter.get("/", CategoryController.getAll);

export default categoryRouter;