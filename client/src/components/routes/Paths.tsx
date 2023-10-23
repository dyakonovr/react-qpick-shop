import { IPathObject } from "@/interfaces/IPathsObject";
import { Route, Routes } from "react-router-dom";
import { adminPaths } from "./AdminPaths";

function Paths() {
  const paths: IPathObject = [
    ...adminPaths
  ];

  return (
    <Routes>
      {/* <Route path="/" element={<Catalog />} />
      <Route path="/item" element={<Item />} />
      <Route path="/order" element={<Order />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success-order" element={<SuccessOrder />} /> */}
      {/* <Route path="/admin" element={<AdminPaths />} /> */}
      {paths.map(obj => <Route path={obj.path} element={obj.element} />)}
    </Routes>
  );
}

export default Paths;