import { Router } from "express";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";

const basketRouter = new Router();

basketRouter.post("/", checkRoleMiddleware("ADMIN"));
basketRouter.get("/");

export default basketRouter;