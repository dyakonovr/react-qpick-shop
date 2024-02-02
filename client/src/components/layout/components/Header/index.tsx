import Logo from '@/components/shared/Logo';
import Quantity from '@/components/shared/Quantity';
import { toast } from '@/components/ui/use-toast';
import { PagePaths } from '@/enum/PagePaths';
import { useActions } from '@/hooks/general/useActions';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { getBasketInfoAndStatusSelector } from '@/store/slices/basket/basket.selectors';
import { getFavouriteQuantitySelector } from '@/store/slices/favourites/favourites.selectors';
import { getUserInfoSelector } from '@/store/slices/user/user.selectors';
import { Link, useNavigate } from 'react-router-dom';
import classes from './styles.module.scss';
import SearchInput from './components/SearchInput';

function Header() {
  const { isAuth, isAdmin } = useTypedSelector(getUserInfoSelector);
  const { logout } = useActions();
  const favouritesQuantity = useTypedSelector(getFavouriteQuantitySelector);
  const { basketItemsQuantity } = useTypedSelector(
    getBasketInfoAndStatusSelector
  );
  const navigate = useNavigate();

  // Функции
  async function handleButton() {
    if (!isAuth) return navigate(PagePaths.AUTHENTICATION);

    logout();
    toast({ title: `Вы успешно вышли из аккаунта!` });
  }
  // Функции END

  return (
    <header className={classes.header}>
      <Logo />
      <SearchInput placeholder="Поиск..." />
      <div className={classes.header__right}>
        <Link
          to="/favourites"
          className={[classes.header__btn, classes.header__favourite].join(' ')}
        >
          <Quantity quantity={favouritesQuantity} />
        </Link>
        <Link
          to={PagePaths.BASKET}
          className={[classes.header__btn, classes.header__basket].join(' ')}
        >
          <Quantity quantity={basketItemsQuantity} />
        </Link>
        <button onClick={handleButton}>{isAuth ? 'Выйти' : 'Войти'}</button>
        {isAdmin && <Link to={PagePaths.ADMIN.HOME}>Админка</Link>}
      </div>
    </header>
  );
}

export default Header;
