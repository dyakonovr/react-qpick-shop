import { PagePaths } from '@/enum/PagePaths';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import ScrollToTop from '../other/ScrollToTop';
import AuthForm from '../screens/Auth';
import Basket from '../screens/Basket';
import Catalog from '../screens/Catalog';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import Item from '../screens/Item';
import { Toaster } from '../ui/toaster';

function Navigation() {
  return (
    <div className="container">
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={PagePaths.AUTHENTICATION} element={<AuthForm />} />
          <Route path={PagePaths.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={PagePaths.ITEM} element={<Item />} />

            {/* <Route element={<PrivateRoutes />}> */}
            <Route path={PagePaths.FAVOURITES} element={<Favourites />} />
            <Route path={PagePaths.BASKET} element={<Basket />} />
            <Route path={PagePaths.CATALOG} element={<Catalog />} />
            {/* <Route path={PagePaths.ORDER} element={<Order />} />
              <Route
                path={PagePaths.ADMIN.HOME}
                element={
                  <Admin>
                    <AdminProductForm />
                  </Admin>
                }
              />
              <Route
                path={PagePaths.ADMIN.CATEGORY}
                element={
                  <Admin>
                    <AdminCategoryForm />
                  </Admin>
                }
              />
              <Route
                path={PagePaths.ADMIN.USER}
                element={
                  <Admin>
                    <AdminUserForm />
                  </Admin>
                }
              />*/}
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
