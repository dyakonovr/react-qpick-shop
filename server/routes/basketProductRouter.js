import { Router } from "express";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";

const basketProductRouter = new Router();

basketProductRouter.post("/", checkRoleMiddleware("ADMIN"));
basketProductRouter.get("/");

export default basketProductRouter;