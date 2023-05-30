import Catalog from "@screens/Catalog/Catalog";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


function Layout() {
  return (
    <div className="container">
      <Header />
      <div className='main'>
        <Catalog />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;