import { Router } from "express";

import basketProductRouter from "./basketProductRouter.js";
import basketRouter from "./basketRouter.js";
import categoryRouter from "./categoryRouter.js";
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";

export const router = new Router();

router.use("/user", userRouter);
router.use("/basket", basketRouter);
router.use("/basket-product", basketProductRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);