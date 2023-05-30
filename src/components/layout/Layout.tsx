import classes from './Layout.module.css'

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout() {
  return (
    <div className="container">
      <Header />
      <div className='main'>children</div>
      <Footer />
    </div>
  );
};

export default Layout;