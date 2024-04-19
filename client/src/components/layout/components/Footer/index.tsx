import { Link, useNavigate } from "react-router-dom";
import classes from "./styles.module.scss";
import { PagePaths } from "./../../../../enum/PagePaths";
import Logo from "@/components/layout/components/Logo";
import { useNotifyUnauthorizedAction } from "@/hooks/general/useNotifyUnauthorizedAction";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";

function Footer() {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(getUserInfoSelector);
  const notifyUnauthorizedAction = useNotifyUnauthorizedAction();

  PagePaths;
  // Функции
  function navigateAuthorizedUser(path: string) {
    if (!isAuth) return notifyUnauthorizedAction();

    navigate(path);
  }
  // Функции END

  return (
    <footer className={classes.footer}>
      <Logo />

      <ul className={classes.footer__menu}>
        <li>
          <span
            onClick={() => navigateAuthorizedUser(PagePaths.FAVOURITES)}
            className={classes.footer__link}
          >
            Избранное
          </span>
        </li>
        <li>
          <span
            onClick={() => navigateAuthorizedUser(PagePaths.BASKET)}
            className={classes.footer__link}
          >
            Корзина
          </span>
        </li>
        <li>
          <Link to={PagePaths.HOME} className={classes.footer__link}>
            Условия сервиса
          </Link>
        </li>
      </ul>

      <ul className={classes.footer__socials}>
        <li>
          <a
            href="#"
            className={[classes.footer__social, classes.footer__social_vk].join(" ")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            className={[classes.footer__social, classes.footer__social_inst].join(" ")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            className={[classes.footer__social, classes.footer__social_tg].join(" ")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            className={[classes.footer__social, classes.footer__social_whatsapp].join(
              " "
            )}
          ></a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
