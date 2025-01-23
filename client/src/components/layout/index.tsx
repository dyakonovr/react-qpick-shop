import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useActions } from "@/shared/hooks/useActions";
import { useTypedSelector } from "@/shared/hooks/useTypedSelector";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";

function Layout() {
  const { id } = useTypedSelector(getUserInfoSelector);
  const { checkAuth } = useActions();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col main h-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
