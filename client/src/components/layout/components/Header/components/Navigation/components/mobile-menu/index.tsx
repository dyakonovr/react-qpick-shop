import { useEffect, useState } from "react";
import HeaderNavigationBurgerButton from "./components/burger/burger";
import HeaderMobileNavigationMenu from "./components/menu";
import type { IHeaderNavigationProps } from "../../navigation-props.type";

function HeaderMobileNavigation({
  notifyUnauthorizedAction,
  handleAuthenticateUserButton,
  isAuth,
  isAdmin,
  navigate
}: IHeaderNavigationProps) {
  const [isMenuShowed, setIsMenuShowed] = useState(false);

  useEffect(() => {
    isMenuShowed
      ? document.body.classList.add("dis-scroll")
      : document.body.classList.remove("dis-scroll");
  }, [isMenuShowed]);

  return (
    <>
      <HeaderMobileNavigationMenu
        notifyUnauthorizedAction={notifyUnauthorizedAction}
        handleAuthenticateUserButton={handleAuthenticateUserButton}
        isAuth={isAuth}
        isAdmin={isAdmin}
        navigate={navigate}
        isMenuShowed={isMenuShowed}
        setIsMenuShowed={setIsMenuShowed}
      />
      <HeaderNavigationBurgerButton
        isMenuShowed={isMenuShowed}
        setIsMenuShowed={setIsMenuShowed}
      />
    </>
  );
}

export default HeaderMobileNavigation;
