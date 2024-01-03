import { PagePaths } from '@/enum/PagePaths';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import ScrollToTop from '../other/ScrollToTop';
import AuthForm from '../screens/Auth/Auth';
import Favourites from '../screens/Favourites/Favourites';
import Home from '../screens/Home/Home';
import Item from '../screens/Item/Item';
import PrivateRoutes from './components/ProtectedRoutes';

function Paths() {
  return (
    <div className="container">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={PagePaths.AUTHENTICATION.LOGIN} element={<AuthForm />} />
          <Route path={PagePaths.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={PagePaths.ITEM} element={<Item />} />
            
            <Route element={<PrivateRoutes />}>
              <Route path={PagePaths.FAVOURITES} element={<Favourites />} />
              {/*<Route path={PagePaths.CART} element={<Cart />} />
              <Route path={PagePaths.ORDER} element={<Order />} />
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
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Paths;
