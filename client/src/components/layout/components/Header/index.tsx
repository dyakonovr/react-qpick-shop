import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
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
import { getOrdersQuantitySelector } from "@/store/slices/orders/orders.selectors";

function Header() {
  const navigate = useNavigate();
  const { logout } = useActions();

  const { isAuth, isAdmin } = useTypedSelector(getUserInfoSelector);
  const favouritesQuantity = useTypedSelector(getFavouriteQuantitySelector);
  const { basketItemsQuantity } = useTypedSelector(getBasketInfoAndStatusSelector);
  const ordersQuantity = useTypedSelector(getOrdersQuantitySelector);

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
            isAuth ? () => navigate(PagePaths.FAVOURITES) : notifyUnauthorizedAction
          }
          className={[classes.header__btn, classes.header__favourite].join(" ")}
          title="Избранные товары"
        >
          <Quantity quantity={favouritesQuantity} />
        </button>
        <button
          onClick={isAuth ? () => navigate(PagePaths.BASKET) : notifyUnauthorizedAction}
          className={[classes.header__btn, classes.header__basket].join(" ")}
          title="Корзина"
        >
          <Quantity quantity={basketItemsQuantity} />
        </button>
        <button
          onClick={isAuth ? () => navigate(PagePaths.ORDERS) : notifyUnauthorizedAction}
          className={[classes.header__btn, classes.header__orders].join(" ")}
          title="Заказы"
        >
          <Quantity quantity={ordersQuantity} />
        </button>
        <button onClick={handleButton}>{isAuth ? "Выйти" : "Войти"}</button>
        {isAdmin && <a href={PagePaths.ADMIN}>Админка</a>}
      </div>
    </header>
  );
}

export default Header;
