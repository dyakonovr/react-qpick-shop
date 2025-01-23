import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  // const { id } = useTypedSelector(getUserInfoSelector);
  // const { checkAuth } = useActions();

  // useEffect(() => {
  //   checkAuth();
  // }, []);

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
