import { Router } from "express";
import { userController } from "../controllers/userController.js";
import isAuthMiddleware from "../middleware/isAuthMiddleware.js";

const userRouter = new Router();

userRouter.post("/registration", userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/auth", isAuthMiddleware, userController.isAuth);

export default userRouter;