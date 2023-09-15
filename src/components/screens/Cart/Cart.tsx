import deliveryMapImage from "assets/img/delivery-map.jpg";
import cartImage from 'assets/img/svg/cart.svg';
import { normalizePrice } from 'functions/normalizePrice';
import { useAppSelector } from 'hooks/useAppSelector';
import ICartProduct from 'interfaces/store/cart/ICartProduct';
import { Link } from 'react-router-dom';
import classes from './Cart.module.scss';
import CartProduct from "UI/CartProduct/CartProduct";

interface IFilledCartProps {
  deliveryPrice: number,
  totalPrice: number,
  products: ICartProduct[]
}

function EmptyCart() {
  return (
    <div className={classes["cart__centered-container"]}>
      <div className={classes.cart__image}><img src={cartImage} alt="" /></div>
      <strong className={classes.cart__title}>Корзина пуста</strong>
      <p className={classes.cart__descr}>Но это никогда не поздно исправить :)</p>
      <Link to="/" className={["link", classes.cart__link, classes["cart__link--big"]].join(' ')}>В каталог товаров</Link>
    </div>
  );
}

function FilledCart({deliveryPrice, totalPrice, products}: IFilledCartProps) {
  return (
    <>
      <strong className="subtitle">Корзина</strong>
      <div className={classes.cart__container}>
        <div className={classes.cart__left}>
          <ul className={classes.cart__list}>
            {products.map(product => <CartProduct product={product} />)}
          </ul>
          <div className={classes.cart__delivery}>
            <strong className="subtitle">Доставка</strong>
            <div className={classes["cart__delivery-image"]}><img src={deliveryMapImage} alt="" /></div>
            <div className={classes["cart__delivery-footer"]}>
              <p className={classes["cart__delivery-text"]}>Доставка курьером</p>
              <button className={classes["cart__delivery-btn"]}></button>
              <span className={classes["cart__delivery-price"]}>{normalizePrice(deliveryPrice)}</span>
            </div>
          </div>
        </div>
        <div className={classes.cart__right}>
          <div className={classes.cart__wrapper}>
            <span className={classes.cart__text}>ИТОГО</span>
            <span className={classes.cart__total}>{normalizePrice(totalPrice)}</span>
          </div>
          <Link to="/order" className={["link", classes.cart__link].join(' ')}>Перейти к оформлению</Link>
        </div>
      </div>
    </>
  );
}

function Cart() {
  const { products, quantity, deliveryPrice, totalPrice } = useAppSelector(state => state.cartSlice);

  return (
    <section className={classes.cart}>
      {quantity === 0 ? <EmptyCart /> : <FilledCart deliveryPrice={deliveryPrice} totalPrice={totalPrice} products={products} />}
    </section>
  );
};


export default Cart;