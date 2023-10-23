import { IPathObject } from "@/interfaces/IPathsObject";
import Admin from "../screens/Admin/Admin";
import { CategoryForm } from "../screens/Admin/components/CategoryForm/Form";
import { ProductForm } from "../screens/Admin/components/ProductForm/Form";
import { UserForm } from "../screens/Admin/components/UserForm/Form";

export const adminPaths: IPathObject = [
  {
    path: "/admin",
    element:
      (<Admin>
        <ProductForm />
      </Admin>)
  },
  {
    path: "/admin/category",
    element:
      (<Admin>
        <CategoryForm />
      </Admin>)
  },
  {
    path: "/admin/create-user",
    element:
      (<Admin>
        <UserForm />
      </Admin>)
  }
];