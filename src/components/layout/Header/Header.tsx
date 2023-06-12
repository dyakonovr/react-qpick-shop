import Logo from '@UI/logo/Logo';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      
      <div className={classes.header__right}>
        <Link to="/favourites" className={[classes.header__btn, classes.header__favourite].join(' ')}></Link>
        <Link to="/cart" className={[classes.header__btn, classes.header__cart].join(' ')}></Link>
      </div>
    </header>
  );
};

export default Header;