import { Router } from "express";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";
import { basketProductController } from "../controllers/basketProductController.js";

const basketProductRouter = new Router();

basketProductRouter.post("/", checkRoleMiddleware("ADMIN"), basketProductController.create);
basketProductRouter.get("/:basketId", basketProductController.getAll);
basketProductRouter.patch("/:id", basketProductController.update);
basketProductRouter.delete("/:id", basketProductController.delete);

export default basketProductRouter;