import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { getBasketQuantitySelector } from '@/store/slices/basket/basket.selectors';
import classes from './Cart.module.scss';
import EmptyCart from './components/EmptyCart/EmptyCart';
import FilledCart from './components/FilledCart/FilledCart';

function Cart() {
  const basketItemsQuantity = useTypedSelector(getBasketQuantitySelector);

  return (
    <section className={classes.cart}>
      {basketItemsQuantity === 0 ? <EmptyCart /> : <FilledCart />}
    </section>
  );
}

export default Cart;
