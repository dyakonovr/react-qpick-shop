import { PagePaths } from "@/enum/PagePaths";
import { useProfile } from "@/hooks/features/useProfile";
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes () {
  const { isAuth } = useProfile();
  return isAuth ? <Outlet /> : <Navigate to={PagePaths.AUTHENTICATION.LOGIN} />;
};

export default PrivateRoutes;