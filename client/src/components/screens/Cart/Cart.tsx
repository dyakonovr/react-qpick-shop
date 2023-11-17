import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from '@/hooks/useAppSelector';
import { IBasketProduct, IExtendedBasketProduct } from "@/interfaces/IBasketProduct";
import classes from './Cart.module.scss';
import EmptyCart from "./components/EmptyCart/EmptyCart";
import FilledCart from "./components/FilledCart/FilledCart";
import fetchProduct from "@/api/fetchProduct";

function Cart() {
  const dispatch = useAppDispatch();

  const basketProducts = useAppSelector(state => state.basketSlice.products);
  const products = useAppSelector(state => state.productsSlice.products);
  const productsForCart = getExtendedBasketProducts();

  // Функции
  function getExtendedBasketProducts() {
    if (!basketProducts || basketProducts.length === 0) return [];

    if (!products) {
      getMissingProducts(basketProducts);
      return [];
    }

    const needToFetchProducts = basketProducts.filter(basketProduct => {
      if (!products.find(product => product.id === basketProduct.productId)) return basketProduct;
    });

    if (needToFetchProducts.length > 0) {
      getMissingProducts(needToFetchProducts);
      return [];
    }

    const result: IExtendedBasketProduct[] = [];

    for (const basketProduct of basketProducts) {
      const product = products.find(product => product.id === basketProduct.productId);
      if (!product) return [];

      result.push({
        ...basketProduct,
        name: product.name,
        price: product.price,
        img: product.imgs[0]
      });
    }

    return result;
  }

  function getMissingProducts(array: IBasketProduct[]) {
    array.map(bs => dispatch(fetchProduct(bs.productId)));
  }
  // Функции END

  return (
    <section className={classes.cart}>
      {productsForCart.length === 0 ? <EmptyCart /> : <FilledCart products={productsForCart} />}
    </section>
  );
};


export default Cart;