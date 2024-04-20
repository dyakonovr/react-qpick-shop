import { Admin, Resource } from "react-admin";
import CategoriesList from "./components/Categories/List";
import dataProvider from "./dataProvider";
import CategoryEdit from "./components/Categories/Edit";
import ProductsList from "./components/Products/List";
import ProductEdit from "./components/Products/Edit";
import CategoryCreate from "./components/Categories/Create";
import ProductCreate from "./components/Products/Create";
import UsersList from "./components/Users/List";
import UserEdit from "./components/Users/Edit";
import OrdersList from "./components/Orders/List";
import OrderShow from "./components/Orders/Show";

export function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="categories"
        list={<CategoriesList />}
        edit={<CategoryEdit />}
        create={<CategoryCreate />}
      />
      <Resource
        name="products"
        list={<ProductsList />}
        edit={<ProductEdit />}
        create={<ProductCreate />}
      />
      <Resource
        name="users"
        list={<UsersList />}
        edit={<UserEdit />}
      />
      <Resource
        name="orders"
        list={<OrdersList />}
        show={<OrderShow />}
      />
    </Admin>
  );
}
