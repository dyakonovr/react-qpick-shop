import Logo from "@/components/shared/Logo/Logo";
import { PagePaths } from "@/enum/PagePaths";
import { Roles } from "@/enum/Roles";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { clearUser } from "@/store/user/UserSlice";
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
// import Quantity from 'UI/Quantity/Quantity';

function Header() {
  // const favouritesQuantity = useAppSelector(state => state.favouritesSlice.quantity);
  // const cartQuantity = useAppSelector(state => state.cartSlice.quantity);
  const dispatch = useAppDispatch();
  const userIsAuth = useAppSelector(state => Boolean(state.userSlice.token));
  const role = useAppSelector(state => state.userSlice.role);

  return (
    <header className={classes.header}>
      <Logo />
      {/* <SearchInput placeholder="Поиск..." /> */}
      <div className={classes.header__right}>
        <Link to="/favourites" className={[classes.header__btn, classes.header__favourite].join(' ')}>
          {/* {favouritesQuantity !== 0 && <Quantity quantity={favouritesQuantity} />} */}
        </Link>
        <Link to="/cart" className={[classes.header__btn, classes.header__cart].join(' ')}>
          {/* {cartQuantity !== 0 && <Quantity quantity={cartQuantity} />} */}
        </Link>
        {role === Roles.ADMIN ? <Link to={PagePaths.ADMIN.HOME}>Админка</Link> : null}
        <Link
          to={PagePaths.AUTHENTICATION.LOGIN}
          onClick={userIsAuth ? () => dispatch(clearUser()) : undefined}
        >
          {userIsAuth ? "Выйти" : "Войти"}
        </Link>
      </div>
    </header>
  );
};

export default Header;