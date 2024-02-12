import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import Logo from "@/components/layout/components/Logo";
import { PagePaths } from "@/enum/PagePaths";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Logo />

      <ul className={classes.footer__menu}>
        <li>
          <Link to={PagePaths.FAVOURITES} className={classes.footer__link}>
            Избранное
          </Link>
        </li>
        <li>
          <Link to={PagePaths.BASKET} className={classes.footer__link}>
            Корзина
          </Link>
        </li>
      </ul>

      <Link to={PagePaths.HOME} className={classes.footer__link}>
        Условия сервиса
      </Link>

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
