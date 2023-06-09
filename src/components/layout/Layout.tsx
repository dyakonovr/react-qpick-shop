import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Catalog from "@screens/Catalog/Catalog";
import Favourites from "@screens/Favourites/Favourites";
import Cart from "@screens/Cart/Cart";
import Order from "@screens/Order/Order";
import Item from "@screens/Item/Item";


function Layout() {
  return (
    <div className="container">
      <Header />
      <div className='main'>
        <Catalog />
        {/* <Favourites /> */}
        {/* <Cart /> */}
        {/* <Order /> */}
        {/* <Item /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;