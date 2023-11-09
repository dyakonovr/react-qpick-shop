import Logo from "@/components/shared/Logo/Logo";
import { PagePaths } from "@/enum/PagePaths";
import { Roles } from "@/enum/Roles";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { clearUser } from "@/store/user/UserSlice";
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { useAuth } from "@/hooks/useAuth";
import Quantity from "@/components/shared/Quantity/Quantity";
// import Quantity from 'UI/Quantity/Quantity';

function Header() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const role = useAppSelector(state => state.userSlice.role);
  const cartProductsQuantity = useAppSelector(state => state.basketSlice.products.length);

  return (
    <header className={classes.header}>
      <Logo />
      {/* <SearchInput placeholder="Поиск..." /> */}
      <div className={classes.header__right}>
        <Link to="/favourites" className={[classes.header__btn, classes.header__favourite].join(' ')}>
          {/* {favouritesQuantity !== 0 && <Quantity quantity={favouritesQuantity} />} */}
        </Link>
        <Link to={PagePaths.CART} className={[classes.header__btn, classes.header__cart].join(' ')}>
          {cartProductsQuantity !== 0 && <Quantity quantity={cartProductsQuantity} />}
        </Link>
        {role === Roles.ADMIN ? <Link to={PagePaths.ADMIN.HOME}>Админка</Link> : null}
        <Link
          to={PagePaths.AUTHENTICATION.LOGIN}
          onClick={isAuth ? () => dispatch(clearUser()) : undefined}
        >
          {isAuth ? "Выйти" : "Войти"}
        </Link>
      </div>
    </header>
  );
};

export default Header;