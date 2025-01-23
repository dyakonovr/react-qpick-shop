import { Outlet, Navigate } from "react-router-dom";
import { PagePaths } from "@/shared/enum/PagePaths";
import { useTypedSelector } from "@/shared/hooks/useTypedSelector";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";

function PrivateRoutes() {
  const { isAuth } = useTypedSelector(getUserInfoSelector);

  if (!isAuth) {
    return <Navigate to={PagePaths.HOME} />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
