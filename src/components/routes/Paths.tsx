import { Route, Routes } from "react-router-dom";
import Catalog from "@screens/Catalog/Catalog";
import Item from "../screens/Item/Item";
import Order from "../screens/Order/Order";
import Favourites from "../screens/Favourites/Favourites";
import Cart from "../screens/Cart/Cart";

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/item" element={<Item />} />
      <Route path="/order" element={<Order />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Paths;