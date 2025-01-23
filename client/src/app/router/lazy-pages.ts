import { lazy } from "react";

export const LazyLayout = lazy(() => import("../../pages/_layout/ui/Layout"));
export const LazyHome = lazy(() => import("../../pages/home/ui/HomePage"));
// export const LazyItem = lazy(() => import("../../components/screens/Item"));
// export const LazyAuth = lazy(() => import("../../components/screens/Auth"));
// export const LazyBasket = lazy(() => import("../../components/screens/Basket"));
// export const LazyCatalog = lazy(() => import("../../components/screens/Catalog"));
// export const LazyOrders = lazy(() => import("../../components/screens/Orders"));
// export const LazyErrorPage = lazy(() => import("../../components/screens/ErrorPage"));
// export const LazyFavourites = lazy(() => import("../../components/screens/Favourites"));
