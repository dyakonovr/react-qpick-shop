import { useAppSelector } from '@/hooks/useAppSelector';
import classes from './Cart.module.scss';
import FilledCart from "./components/FilledCart/FilledCart";
import EmptyCart from "./components/EmptyCart/EmptyCart";

function Cart() {
  const basketProducts = useAppSelector(state => state.basketSlice.products);
  const products = useAppSelector(state => state.productsSlice.products);

  // Функции
  function filterProducts() {
    const result = [];

    for (const basketProduct of basketProducts) {
      const product = products.find(product => product.id === basketProduct.productId);
      if (product) result.push(product);;
    }

    return result;
  }
  // Функции END

  return (
    <section className={classes.cart}>
      {products.length === 0 ? <EmptyCart /> : <FilledCart products={filterProducts()} />}
    </section>
  );
};


export default Cart;