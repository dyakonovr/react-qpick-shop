import { useActions } from '@/hooks/general/useActions';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { checkAccessToken } from '@/services/auth/auth.helper';
import { getUserInfoSelector } from '@/store/slices/user/user.selectors';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

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
      <div className="flex flex-col main h-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
