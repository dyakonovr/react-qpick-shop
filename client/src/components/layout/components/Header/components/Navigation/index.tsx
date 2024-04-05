import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import HeaderDesktopNavigation from "./components/desktop-menu";
import HeaderMobileNavigation from "./components/mobile-menu";
import { useActions } from "@/hooks/general/useActions";
import { useNotifyUnauthorizedAction } from "@/hooks/general/useNotifyUnauthorizedAction";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";
import { PagePaths } from "@/enum/PagePaths";

function HeaderNavigation() {
  const navigate = useNavigate();
  const { logout } = useActions();

  const { isAuth, isAdmin } = useTypedSelector(getUserInfoSelector);
  const notifyUnauthorizedAction = useNotifyUnauthorizedAction();

  // Функции
  async function handleAuthenticateUserButton() {
    if (!isAuth) return navigate(PagePaths.AUTHENTICATION);

    logout();
    toast(`Вы успешно вышли из аккаунта!`);
  }
  // Функции END

  return (
    <div className="flex align-center">
      <HeaderDesktopNavigation
        notifyUnauthorizedAction={notifyUnauthorizedAction}
        handleAuthenticateUserButton={handleAuthenticateUserButton}
        isAuth={isAuth}
        isAdmin={isAdmin}
        navigate={navigate}
      />
      <HeaderMobileNavigation
        notifyUnauthorizedAction={notifyUnauthorizedAction}
        handleAuthenticateUserButton={handleAuthenticateUserButton}
        isAuth={isAuth}
        isAdmin={isAdmin}
        navigate={navigate}
      />
    </div>
  );
}

export default HeaderNavigation;
