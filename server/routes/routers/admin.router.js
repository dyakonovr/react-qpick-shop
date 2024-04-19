import { Router } from "express";
import AdminProductController from "../../controllers/admin/admin-product.controller.js";
import AdminCategoryController from "../../controllers/admin/admin-category.controller.js";
import AdminUserController from "../../controllers/admin/admin-user.controller.js";
import AdminOrderController from "../../controllers/admin/admin-order.controller.js";

const adminRouter = new Router();

adminRouter.get("/categories", AdminCategoryController.getAll);
adminRouter.post("/categories", AdminCategoryController.create);
adminRouter.get("/categories/get-many", AdminCategoryController.getMany);
adminRouter.get("/categories/:id", AdminCategoryController.getById);
adminRouter.put("/categories/:id", AdminCategoryController.update);
adminRouter.delete("/categories/delete-many", AdminCategoryController.deleteMany);
adminRouter.delete("/categories/:id", AdminCategoryController.delete);

adminRouter.get("/products", AdminProductController.getAll);
adminRouter.get("/products/many-references", AdminProductController.getManyReference);
adminRouter.get("/products/:id", AdminProductController.getById);
adminRouter.post("/products", AdminProductController.create);
adminRouter.put("/products/:id", AdminProductController.update);
adminRouter.delete("/products/delete-many", AdminProductController.deleteMany);
adminRouter.delete("/products/:id", AdminProductController.delete);

adminRouter.get("/users", AdminUserController.getAll);
adminRouter.get("/users/get-many", AdminUserController.getMany);
adminRouter.get("/users/:id", AdminUserController.getById);
adminRouter.put("/users/:id", AdminUserController.update);

adminRouter.get("/orders", AdminOrderController.getAll);
adminRouter.get("/orders/:id", AdminOrderController.getById);



export default adminRouter;