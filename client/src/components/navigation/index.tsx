import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../other/ScrollToTop";
import { Toaster } from "../ui/shadcn/sonner";
import PrivateRoutes from "./components/ProtectedRoutes";
import {
  LazyLayout,
  LazyAuth,
  LazyHome,
  LazyCatalog,
  LazyItem,
  LazyFavourites,
  LazyBasket,
  LazyErrorPage,
  LazyOrders
} from "./lazy-pages";
import { PagePaths } from "@/enum/PagePaths";

function Navigation() {
  return (
    <div className="container">
      <BrowserRouter>
        <ScrollToTop />
        <Toaster />
        <Routes>
          <Route path={PagePaths.HOME} element={<LazyLayout />}>
            <Route path={PagePaths.AUTHENTICATION} element={<LazyAuth />} />
            <Route index element={<LazyHome />} />
            <Route path={PagePaths.CATALOG} element={<LazyCatalog />} />
            <Route path={PagePaths.ITEM} element={<LazyItem />} />

            <Route element={<PrivateRoutes />}>
              <Route path={PagePaths.FAVOURITES} element={<LazyFavourites />} />
              <Route path={PagePaths.BASKET} element={<LazyBasket />} />
              <Route path={PagePaths.ORDERS} element={<LazyOrders />} />
            </Route>
            <Route path="*" element={<LazyErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
