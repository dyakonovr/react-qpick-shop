import { PagePaths } from "@/enum/PagePaths";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ScrollToTop from "../other/ScrollToTop";
import Admin from "../screens/Admin/Admin";
import { AdminCategoryForm } from "../screens/Admin/components/CategoryForm/Form";
import { AdminProductForm } from "../screens/Admin/components/ProductForm/Form";
import { AdminUserForm } from "../screens/Admin/components/UserForm/Form";
import AuthForm from "../screens/Auth/Auth";
import Cart from "../screens/Cart/Cart";
import Home from "../screens/Home/Home";
import Item from "../screens/Item/Item";

function Paths() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        <Route path={PagePaths.AUTHENTICATION.LOGIN} element={<AuthForm />} />
        <Route path={PagePaths.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PagePaths.ITEM} element={<Item />} />
          <Route path={PagePaths.CART} element={<Cart />} />
          {/* <Route path={PagePaths.ITEM} element={<Item />} /> */}
          {/* <Route path={PagePaths.CART} element={<Cart />} /> */}
          
          {/* Admin */}
          <Route path={PagePaths.ADMIN.HOME} element={<Admin><AdminProductForm /></Admin>} />
          <Route path={PagePaths.ADMIN.CATEGORY} element={<Admin><AdminCategoryForm /></Admin>} />
          <Route path={PagePaths.ADMIN.USER} element={<Admin><AdminUserForm /></Admin>} />
          {/* Admin END */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;