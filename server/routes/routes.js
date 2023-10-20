import { Router } from "express";
import userRouter from "./userRouter.js";
import basketRouter from "./basketRouter.js";
import basketProductRouter from "./basketProductRouter.js";
import typeRouter from "./typeRouter.js";
import productRouter from "./productRouter.js";

export const router = new Router();

router.use("/user", userRouter);
router.use("/basket", basketRouter);
router.use("/basket-product", basketProductRouter);
router.use("/type", typeRouter);
router.use("/product", productRouter);