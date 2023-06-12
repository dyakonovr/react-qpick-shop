import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Paths from "../routes/Paths";
import ScrollToTop from "../other/ScrollToTop";

function Layout() {
  return (
    <div className="container">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div className='main'><Paths /></div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;