import Logo from '@UI/logo/Logo';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import Quantity from '@UI/Quantity/Quantity';
import { useAppSelector } from '@hooks/useAppSelector';

function Header() {
  const { quantity } = useAppSelector(state => state.favouritesSlice);

  return (
    <header className={classes.header}>
      <Logo />
      
      <div className={classes.header__right}>
        <Link to="/favourites"
          className={[classes.header__btn, classes.header__favourite].join(' ')}>
          <Quantity quantity={quantity} />
        </Link>
        <Link to="/cart"
          className={[classes.header__btn, classes.header__cart].join(' ')}>
          <Quantity quantity={10} />
          </Link>
      </div>
    </header>
  );
};

export default Header;