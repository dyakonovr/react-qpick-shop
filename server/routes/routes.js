import { Router } from "express";

import authRouter from "./routers/auth.router.js";
import basketRouter from "./routers/basket.router.js";
import categoryRouter from "./routers/category.router.js";
import productRouter from "./routers/product.router.js";
import userRouter from "./routers/user.router.js";
import basketItemRouter from "./routers/basket-item.router.js";
import favouritesRouter from "./routers/favourites.router.js";
import orderRouter from "./routers/order.router.js";

export const router = new Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/basket", basketRouter);
router.use("/basket-item", basketItemRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/favourites", favouritesRouter);
router.use("/order", orderRouter);