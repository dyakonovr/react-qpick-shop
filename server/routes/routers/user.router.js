import { Router } from "express";
import UserController from "../../controllers/user.controller.js";
import { isAuthMiddleware } from "../../middleware/is-auth.middleware.js";

const userRouter = new Router();

// userRouter.patch("/profile/favourites/:productId", isAuthMiddleware, UserController.toggleFavourite);
userRouter.get("/profile/:id", UserController.getById);

export default userRouter;