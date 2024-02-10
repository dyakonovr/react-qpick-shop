import { PagePaths } from '@/enum/PagePaths';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import ScrollToTop from '../other/ScrollToTop';
import Admin from '../screens/Admin';
import { AdminCategoryForm } from '../screens/Admin/components/CategoryForm';
import { AdminProductForm } from '../screens/Admin/components/ProductForm';
import { AdminUserForm } from '../screens/Admin/components/UserForm';
import AuthForm from '../screens/Auth';
import Basket from '../screens/Basket';
import Catalog from '../screens/Catalog';
import ErrorPage from '../screens/ErrorPage';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import Item from '../screens/Item';
import { Toaster } from '../ui/toaster';
import { AnimatePresence } from "framer-motion";

function Navigation() {
  return (
    <div className="container">
      <Toaster />
      {/* <AnimatePresence mode="wait" initial={false}> */}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path={PagePaths.AUTHENTICATION} element={<AuthForm />} />
            <Route path={PagePaths.HOME} element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={PagePaths.ITEM} element={<Item />} />

              <Route path={PagePaths.FAVOURITES} element={<Favourites />} />
              <Route path={PagePaths.BASKET} element={<Basket />} />
              <Route path={PagePaths.CATALOG} element={<Catalog />} />
              {/* <Route path={PagePaths.ORDER} element={<Order />} /> */}
              <Route path={PagePaths.ADMIN.HOME} element={<Admin />}>
                <Route
                  path={PagePaths.ADMIN.HOME}
                  element={<AdminProductForm />}
                />
                <Route
                  path={PagePaths.ADMIN.CATEGORY}
                  element={<AdminCategoryForm />}
                />
                <Route
                  path={PagePaths.ADMIN.USER}
                  element={<AdminUserForm />}
                />
              </Route>

              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default Navigation;
