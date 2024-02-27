import { Router } from "express";
import AuthController from "../../controllers/auth/auth.controller.js";

const authRouter = new Router();

authRouter.post("/registration", AuthController.registration);
authRouter.post("/login", AuthController.login);
authRouter.get("/login/access-token", AuthController.getNewTokens);

export default authRouter;