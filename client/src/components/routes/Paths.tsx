import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Admin from "../screens/Admin/Admin";
import { ProductForm } from "../screens/Admin/components/ProductForm/Form";
import AuthForm from "../screens/Auth/Auth";
import Catalog from "../screens/Catalog/Catalog";

function Paths() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthForm />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path="admin" element={<Admin><ProductForm /></Admin>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;