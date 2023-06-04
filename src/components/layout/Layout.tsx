import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Catalog from "@screens/Catalog/Catalog";
import Favourites from "@screens/Favourites/Favourites";
import Cart from "@screens/Cart/Cart";
import Order from "@screens/Order/Order";


function Layout() {
  return (
    <div className="container">
      <Header />
      <div className='main'>
        {/* <Catalog /> */}
        {/* <Favourites /> */}
        {/* <Cart /> */}
        <Order />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;