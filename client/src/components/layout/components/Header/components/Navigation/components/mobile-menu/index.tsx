import { useEffect, useRef, useState } from "react";
import HeaderNavigationBurgerButton from "./components/burger";
import HeaderMobileNavigationMenu from "./components/menu";
import type { IHeaderNavigationProps } from "../../navigation-props.type";
import { useOutsideClick } from "@/hooks/general/useOutsideClick";

function HeaderMobileNavigation({
  notifyUnauthorizedAction,
  handleAuthenticateUserButton,
  isAuth,
  isAdmin,
  navigate
}: IHeaderNavigationProps) {
  const [isMenuShowed, setIsMenuShowed] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useOutsideClick(
    [burgerButtonRef.current, document.querySelector("#header-search-input")],
    () => setIsMenuShowed(false)
  );

  useEffect(() => {
    isMenuShowed
      ? document.body.classList.add("dis-scroll")
      : document.body.classList.remove("dis-scroll");

    return () => document.body.classList.remove("dis-scroll");
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
        ref={menuRef}
      />
      <HeaderNavigationBurgerButton
        isMenuShowed={isMenuShowed}
        setIsMenuShowed={setIsMenuShowed}
        ref={burgerButtonRef}
      />
    </>
  );
}

export default HeaderMobileNavigation;
