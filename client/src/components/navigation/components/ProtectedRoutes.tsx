import { Outlet, Navigate } from "react-router-dom";
import { PagePaths } from "@/enum/PagePaths";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";

function PrivateRoutes() {
  const { isAuth } = useTypedSelector(getUserInfoSelector);

  if (!isAuth) {
    // setTimeout(() => {
    //   protectedRouteMiddleware();
    // }, 100);
    return <Navigate to={PagePaths.HOME} />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
