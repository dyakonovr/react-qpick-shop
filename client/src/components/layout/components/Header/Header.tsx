import Logo from '@/components/shared/Logo/Logo';
import Quantity from '@/components/shared/Quantity/Quantity';
import { toast } from '@/components/ui/use-toast';
import { PagePaths } from '@/enum/PagePaths';
import { Roles } from '@/enum/Roles';
import { useAuth } from '@/hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';
import { useProfile } from "@/hooks/useProfile";

function Header() {
  const { profile } = useProfile();
  const favouritesQuantity = profile ? profile.favourites.length : 0;
  // const favouritesQuantity = profile.

  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const { isAuth } = useAuth();
  // const role = useAppSelector((state) => state.userSlice.role);
  // const cartProductsQuantity = useAppSelector(
  //   (state) => state.basketSlice.products?.length
  // );

  // // Функции
  // function handleButton() {
  //   if (!isAuth) navigate(PagePaths.AUTHENTICATION.LOGIN);
  //   else {
  //     dispatch(clearUser());
  //     toast({
  //       title: `Вы успешно вышли из аккаунта!`,
  //     });
  //   }
  // }
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
          {favouritesQuantity !== 0 && <Quantity quantity={favouritesQuantity} />}
        </Link>
        {/* <Link
          to={PagePaths.CART}
          className={[classes.header__btn, classes.header__cart].join(' ')}
        >
          {!!cartProductsQuantity && (
            <Quantity quantity={cartProductsQuantity} />
          )}
        </Link>
        {role === Roles.ADMIN && <Link to={PagePaths.ADMIN.HOME}>Админка</Link>}
        <button onClick={handleButton}>{isAuth ? 'Выйти' : 'Войти'}</button> */}
      </div>
    </header>
  );
}

export default Header;
