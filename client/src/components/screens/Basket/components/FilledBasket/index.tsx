import { normalizePrice } from '@/functions/normalizePrice';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { getBasketItemsAndTotalPriceSelector } from '@/store/slices/basket/basket.selectors';
import { Link } from 'react-router-dom';
import BasketItem from './BasketItem';
import FilledCartSkeleton from './skeleton';
import classes from './styles.module.scss';

function FilledBasket() {
  const { basketItems, total, isLoading } = useTypedSelector(
    getBasketItemsAndTotalPriceSelector
  );

  if (isLoading) return <FilledCartSkeleton />;

  return (
    <>
      <strong className="subtitle">Корзина</strong>
      <div className={classes.filled_cart__container}>
        <div className={classes.filled_cart__left}>
          <ul className={classes.filled_cart__list}>
            {basketItems.map((basketItem) => (
              <BasketItem basketItem={basketItem} key={basketItem.id} />
            ))}
          </ul>
        </div>
        <div className={classes.filled_cart__right}>
          <div className={classes.filled_cart__wrapper}>
            <span className={classes.filled_cart__text}>ИТОГО</span>
            <span className={classes.filled_cart__total}>
              {normalizePrice(total)}
            </span>
          </div>
          <Link
            to="/order"
            className={['link', classes.filled_cart__link].join(' ')}
          >
            Перейти к оформлению
          </Link>
        </div>
      </div>
    </>
  );
}

export default FilledBasket;
