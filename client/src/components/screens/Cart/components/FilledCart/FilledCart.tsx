import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { getBasketItemsAndTotalPriceSelector } from '@/store/slices/basket/basket.selectors';
import { Link } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';
import classes from './FilledCart.module.scss';
import { normalizePrice } from "@/functions/normalizePrice";

function FilledCart() {
  const { basketItems, total } = useTypedSelector(getBasketItemsAndTotalPriceSelector);
  if (!basketItems) return null;

  return (
    <>
      <strong className="subtitle">Корзина</strong>
      <div className={classes.filled_cart__container}>
        <div className={classes.filled_cart__left}>
          <ul className={classes.filled_cart__list}>
            {basketItems.map((basketItem) => (
              <CartProduct basketItem={basketItem} key={basketItem.id} />
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

export default FilledCart;
