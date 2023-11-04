import { Router } from "express";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";
import { categoryController } from "../controllers/categoryController.js";

const categoryRouter = new Router();

categoryRouter.post("/", checkRoleMiddleware("ADMIN"), categoryController.create);
categoryRouter.get("/:id", categoryController.getOne);
categoryRouter.get("/", categoryController.getAll);

export default categoryRouter;