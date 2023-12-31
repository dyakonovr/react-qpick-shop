import { PagePaths } from "@/enum/PagePaths";
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes () {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={PagePaths.AUTHENTICATION.LOGIN} />;
};

export default PrivateRoutes;
