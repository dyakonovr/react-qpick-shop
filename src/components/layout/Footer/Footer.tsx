import Logo from '@ui/logo/Logo';
import classes from './Footer.module.scss'

function Footer() {
  return (
    <footer className={classes.footer}>
      <Logo />

      <ul className={classes.footer__menu}>
        <li><a href="#" className={classes.footer__link}>Избранное</a></li>
        <li><a href="#" className={classes.footer__link}>Контакты</a></li>
        <li><a href="#" className={classes.footer__link}>Корзина</a></li>
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