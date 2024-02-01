import { PagePaths } from "@/enum/PagePaths";
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes () {
  // const { isAuth } = useProfile();
  // return isAuth ? <Outlet /> : <Navigate to={PagePaths.AUTHENTICATION} />;
};

export default PrivateRoutes;