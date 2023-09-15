import { Route, Routes } from "react-router-dom";
import Cart from "screens/Cart/Cart";
import Catalog from "screens/Catalog/Catalog";
import Favourites from "screens/Favourites/Favourites";
import Item from "screens/Item/Item";
import Order from "screens/Order/Order";
import SuccessOrder from "screens/SuccessOrder/SuccessOrder";

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/item" element={<Item />} />
      <Route path="/order" element={<Order />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success-order" element={<SuccessOrder />} />
    </Routes>
  );
}

export default Paths;