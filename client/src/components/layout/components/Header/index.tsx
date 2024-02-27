import { toast } from "sonner";
import Quantity from "./components/Quantity";
import SearchInput from "./components/SearchInput";
import classes from "./styles.module.scss";
import Logo from "@/components/layout/components/Logo";
import { PagePaths } from "@/enum/PagePaths";
import { useActions } from "@/hooks/general/useActions";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { getBasketInfoAndStatusSelector } from "@/store/slices/basket/basket.selectors";
import { getFavouriteQuantitySelector } from "@/store/slices/favourites/favourites.selectors";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";
import { useNotifyUnauthorizedAction } from "@/hooks/general/useNotifyUnauthorizedAction";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { logout } = useActions();

  const { isAuth, isAdmin } = useTypedSelector(getUserInfoSelector);
  const favouritesQuantity = useTypedSelector(getFavouriteQuantitySelector);
  const { basketItemsQuantity } = useTypedSelector(
    getBasketInfoAndStatusSelector
  );

  const notifyUnauthorizedAction = useNotifyUnauthorizedAction();

  // Функции
  async function handleButton() {
    if (!isAuth) return navigate(PagePaths.AUTHENTICATION);

    logout();
    toast(`Вы успешно вышли из аккаунта!`);
  }
  // Функции END

  return (
    <header className={classes.header}>
      <Logo />
      <SearchInput placeholder="Поиск..." />
      <div className={classes.header__right}>
        <button
          onClick={
            isAuth
              ? () => navigate(PagePaths.FAVOURITES)
              : notifyUnauthorizedAction
          }
          className={[classes.header__btn, classes.header__favourite].join(" ")}
        >
          <Quantity quantity={favouritesQuantity} />
        </button>
        <button
          onClick={
            isAuth ? () => navigate(PagePaths.BASKET) : notifyUnauthorizedAction
          }
          className={[classes.header__btn, classes.header__basket].join(" ")}
        >
          <Quantity quantity={basketItemsQuantity} />
        </button>
        <button onClick={handleButton}>{isAuth ? "Выйти" : "Войти"}</button>
        {isAdmin && <Link to={PagePaths.ADMIN.HOME}>Админка</Link>}
      </div>
    </header>
  );
}

export default Header;
