import { PagePaths } from "@/enum/PagePaths";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Admin from "../screens/Admin/Admin";
import { AdminCategoryForm } from "../screens/Admin/components/CategoryForm/Form";
import { AdminProductForm } from "../screens/Admin/components/ProductForm/Form";
import { AdminUserForm } from "../screens/Admin/components/UserForm/Form";
import AuthForm from "../screens/Auth/Auth";
import Home from "../screens/Home/Home";

function Paths() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PagePaths.AUTHENTICATION.LOGIN} element={<AuthForm />} />
        <Route path={PagePaths.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PagePaths.ADMIN.HOME} element={<Admin><AdminProductForm /></Admin>} />
          <Route path={PagePaths.ADMIN.CATEGORY} element={<Admin><AdminCategoryForm /></Admin>} />
          <Route path={PagePaths.ADMIN.USER} element={<Admin><AdminUserForm /></Admin>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;