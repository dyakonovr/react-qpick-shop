import Logo from '@UI/logo/Logo';
import classes from './Footer.module.scss'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Logo />

      <ul className={classes.footer__menu}>
        <li><Link to="/favourites" className={classes.footer__link}>Избранное</Link></li>
        <li><Link to="/" className={classes.footer__link}>Контакты</Link></li>
        <li><Link to="/cart" className={classes.footer__link}>Корзина</Link></li>
      </ul>

      <a href="#" className={classes.footer__link}>Условия сервиса</a>

      <ul className={classes.footer__socials}>
        <li><a href='#' className={[classes.footer__social, classes.footer__social_vk].join(' ')}></a></li>
        <li><a href='#' className={[classes.footer__social, classes.footer__social_inst].join(' ')}></a></li>
        <li><a href='#' className={[classes.footer__social, classes.footer__social_tg].join(' ')}></a></li>
        <li><a href='#' className={[classes.footer__social, classes.footer__social_whatsapp].join(' ')}></a></li>
      </ul>

    </footer>
  );
};

export default Footer;