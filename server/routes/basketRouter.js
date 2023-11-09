import { Router } from "express";
import { basketController } from "../controllers/basketController.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";

const basketRouter = new Router();

basketRouter.post("/", checkRoleMiddleware("ADMIN"));
basketRouter.get("/:id", basketController.getOne);

export default basketRouter;