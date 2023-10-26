import { IPathObject } from "@/interfaces/IPathsObject";
import { Route, Routes } from "react-router-dom";
import Admin from "../screens/Admin/Admin";
import { CategoryForm } from "../screens/Admin/components/CategoryForm/Form";
import AuthForm from "../screens/Auth/Auth";

function OuterOfLayoutPaths() {
  const authPaths: IPathObject = [
    {
      path: "/registration",
      element: <AuthForm />
    },
    {
      path: "/login",
      element:
        (<Admin>
          <CategoryForm />
        </Admin>)
    },
  ];
  
  return (
    <div className="flex flex-col m-auto w-[600px]">
      <Routes>
        {authPaths.map(obj => <Route path={obj.path} element={obj.element} key={obj.path} />)}
      </Routes>
    </div>
  );
}

export default OuterOfLayoutPaths;