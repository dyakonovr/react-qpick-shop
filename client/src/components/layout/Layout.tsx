import { useActions } from '@/hooks/general/useActions';
import { checkAccessToken } from '@/services/auth/auth.helper';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function Layout() {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (checkAccessToken()) checkAuth();
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
}

export default Layout;
