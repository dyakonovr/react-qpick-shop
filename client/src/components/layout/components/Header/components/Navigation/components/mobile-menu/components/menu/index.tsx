import classes from "./styles.module.scss";
import type { IHeaderNavigationProps } from "../../../../navigation-props.type";
import { PagePaths } from "@/enum/PagePaths";

interface IHeaderMobileNavigationMenuProps extends IHeaderNavigationProps {
  isMenuShowed: boolean;
  setIsMenuShowed: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderMobileNavigationMenu({
  isMenuShowed,
  setIsMenuShowed,
  notifyUnauthorizedAction,
  handleAuthenticateUserButton,
  isAuth,
  isAdmin,
  navigate
}: IHeaderMobileNavigationMenuProps) {
  const menuClasses = isMenuShowed
    ? `${classes.mobile_menu} ${classes["mobile_menu--active"]}`
    : classes.mobile_menu;

  // Функции
  function handleMenuItemClick(navigatePath: string) {
    if (!isAuth) return notifyUnauthorizedAction && notifyUnauthorizedAction();

    setIsMenuShowed(false);
    navigate(navigatePath);
  }
  // Функции END

  return (
    <ul className={menuClasses}>
      <li
        className={classes.mobile_menu__item}
        onClick={() => handleMenuItemClick(PagePaths.FAVOURITES)}
      >
        Избранное
      </li>
      <li
        className={classes.mobile_menu__item}
        onClick={() => handleMenuItemClick(PagePaths.BASKET)}
      >
        Корзина
      </li>
      <li
        className={classes.mobile_menu__item}
        onClick={() => handleMenuItemClick(PagePaths.ORDERS)}
      >
        Заказы
      </li>
      <li
        className={classes.mobile_menu__item}
        onClick={() => {
          setIsMenuShowed(false);
          handleAuthenticateUserButton();
        }}
      >
        {isAuth ? "Выйти" : "Войти"}
      </li>
      {isAdmin && (
        <li className={classes.mobile_menu__item}>
          <a href={PagePaths.ADMIN}>Админка</a>
        </li>
      )}
    </ul>
  );
}

export default HeaderMobileNavigationMenu;
