import Logo from '@ui/logo/Logo';
import classes from './Header.module.scss';

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      
      <div className={classes.header__right}>
        <button type='button'
          className={[classes.header__btn, classes.header__favourite].join(' ')}></button>
        <button type='button'
          className={[classes.header__btn, classes.header__cart].join(' ')}></button>
      </div>
    </header>
  );
};

export default Header;