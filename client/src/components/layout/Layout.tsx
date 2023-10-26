import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout() {
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