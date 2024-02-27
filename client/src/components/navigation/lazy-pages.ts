import { lazy } from "react";

export const LazyAdmin = lazy(() => import("../screens/Admin"));
export const LazyLayout = lazy(() => import("../layout"));
export const LazyItem = lazy(() => import("../screens/Item"));
export const LazyAuth = lazy(() => import("../screens/Auth"));
export const LazyBasket = lazy(() => import("../screens/Basket"));
export const LazyCatalog = lazy(() => import("../screens/Catalog"));
export const LazyErrorPage = lazy(() => import("../screens/ErrorPage"));
export const LazyFavourites = lazy(() => import("../screens/Favourites"));
export const LazyHome = lazy(() => import("../screens/Home"));
export const LazyAdminCategoryPage = lazy(
  () => import("../screens/Admin/screens/Category")
);
export const LazyAdminProductForm = lazy(
  () => import("../screens/Admin/screens/Product")
);
