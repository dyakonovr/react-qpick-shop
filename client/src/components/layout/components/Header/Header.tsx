import Logo from '@/components/shared/Logo/Logo';
import Quantity from '@/components/shared/Quantity/Quantity';
import { useProfile } from "@/hooks/features/useProfile";
import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';
import { PagePaths } from "@/enum/PagePaths";
import { toast } from "@/components/ui/use-toast";
import { useActions } from "@/hooks/general/useActions";

function Header() {
  const { favourites, isAdmin, isAuth } = useProfile();
  const { logout } = useActions();
  const favouritesQuantity = favourites.length;
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const { isAuth } = useAuth();
  // const role = useAppSelector((state) => state.userSlice.role);
  // const cartProductsQuantity = useAppSelector(
  //   (state) => state.basketSlice.products?.length
  // );

  // Функции
  async function handleButton() {
    if (!isAuth) return navigate(PagePaths.AUTHENTICATION.LOGIN);
    
    logout();
    toast({
      title: `Вы успешно вышли из аккаунта!`,
    });
  }
  // Функции END

  return (
    <header className={classes.header}>
      <Logo />
      {/* <SearchInput placeholder="Поиск..." /> */}
      <div className={classes.header__right}>
        <Link
          to="/favourites"
          className={[classes.header__btn, classes.header__favourite].join(' ')}
        >
          {favouritesQuantity !== 0 && (
            <Quantity quantity={favouritesQuantity} />
          )}
        </Link>
        {/* <Link
          to={PagePaths.CART}
          className={[classes.header__btn, classes.header__cart].join(' ')}
        >
          {!!cartProductsQuantity && (
            <Quantity quantity={cartProductsQuantity} />
          )}
        </Link>*/}
        <button onClick={handleButton}>{isAuth ? 'Выйти' : 'Войти'}</button>
        {isAdmin && <Link to={PagePaths.ADMIN.HOME}>Админка</Link>}
      </div>
    </header>
  );
}

export default Header;
