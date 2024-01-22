import { useActions } from '@/hooks/general/useActions';
import { checkAccessToken } from '@/services/auth/auth.helper';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";

function Layout() {
  const { id } = useTypedSelector(getUserInfoSelector);
  const { checkAuth, fetchFavourites, fetchBasketAndItems } = useActions();

  useEffect(() => {
    if (checkAccessToken()) checkAuth();
  }, []);

  useEffect(() => {
    if (!id) return;

    fetchFavourites();
    fetchBasketAndItems();
  }, [id]);

  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
