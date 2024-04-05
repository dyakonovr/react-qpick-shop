import Quantity from "../../../Quantity";
import classes from "./styles.module.scss";
import type { IHeaderNavigationProps } from "../../navigation-props.type";
import { PagePaths } from "@/enum/PagePaths";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { getBasketInfoAndStatusSelector } from "@/store/slices/basket/basket.selectors";
import { getFavouriteQuantitySelector } from "@/store/slices/favourites/favourites.selectors";
import { getOrdersQuantitySelector } from "@/store/slices/orders/orders.selectors";

function HeaderDesktopNavigation({
  notifyUnauthorizedAction,
  handleAuthenticateUserButton,
  isAuth,
  isAdmin,
  navigate
}: IHeaderNavigationProps) {
  const favouritesQuantity = useTypedSelector(getFavouriteQuantitySelector);
  const { basketItemsQuantity } = useTypedSelector(getBasketInfoAndStatusSelector);
  const ordersQuantity = useTypedSelector(getOrdersQuantitySelector);

  return (
    <div className={classes.header_navigation}>
      <button
        onClick={isAuth ? () => navigate(PagePaths.FAVOURITES) : notifyUnauthorizedAction}
        className={[
          classes.header_navigation__btn,
          classes.header_navigation__favourite
        ].join(" ")}
        title="Избранные товары"
      >
        <Quantity quantity={favouritesQuantity} />
      </button>
      <button
        onClick={isAuth ? () => navigate(PagePaths.BASKET) : notifyUnauthorizedAction}
        className={[
          classes.header_navigation__btn,
          classes.header_navigation__basket
        ].join(" ")}
        title="Корзина"
      >
        <Quantity quantity={basketItemsQuantity} />
      </button>
      <button
        onClick={isAuth ? () => navigate(PagePaths.ORDERS) : notifyUnauthorizedAction}
        className={[
          classes.header_navigation__btn,
          classes.header_navigation__orders
        ].join(" ")}
        title="Заказы"
      >
        <Quantity quantity={ordersQuantity} />
      </button>
      <button onClick={handleAuthenticateUserButton}>{isAuth ? "Выйти" : "Войти"}</button>
      {isAdmin && <a href={PagePaths.ADMIN}>Админка</a>}
    </div>
  );
}

export default HeaderDesktopNavigation;
