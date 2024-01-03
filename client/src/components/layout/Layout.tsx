import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useActions } from "@/hooks/general/useActions";

function Layout() {
  const { checkAuth } = useActions();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;