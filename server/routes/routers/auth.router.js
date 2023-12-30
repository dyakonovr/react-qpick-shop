import { Router } from "express";
import AuthController from "../../controllers/auth/auth.controller.js";
import { isAuthMiddleware } from './../../middleware/is-auth.middleware.js';

const authRouter = new Router();

authRouter.post("/registration", AuthController.registration);
authRouter.post("/login", AuthController.login);
authRouter.get("/login/access-token", isAuthMiddleware, AuthController.getNewTokens);

export default authRouter;