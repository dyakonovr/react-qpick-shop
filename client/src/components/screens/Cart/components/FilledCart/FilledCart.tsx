import { IExtendedBasketProduct } from "@/interfaces/IBasketProduct";
import { Link } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";
import classes from "./FilledCart.module.scss";
import { normalizePrice } from "@/functions/normalizePrice";

interface IFilledCartProps {
  products: IExtendedBasketProduct[]
}
 
function FilledCart({ products }: IFilledCartProps) {
  const totalPrice = products.reduce(function(sum, product) {
    return sum + product.price * product.quantity;
  }, 0);

  return (
    <>
      <strong className="subtitle">Корзина</strong>
      <div className={classes.filled_cart__container}>
        <div className={classes.filled_cart__left}>
          <ul className={classes.filled_cart__list}>
            {products.map(product => <CartProduct product={product} key={product.id} />)}
          </ul>
        </div>
        <div className={classes.filled_cart__right}>
          <div className={classes.filled_cart__wrapper}>
            <span className={classes.filled_cart__text}>ИТОГО</span>
            <span className={classes.filled_cart__total}>{normalizePrice(totalPrice)}</span>
          </div>
          <Link to="/order" className={["link", classes.filled_cart__link].join(' ')}>Перейти к оформлению</Link>
        </div>
      </div>
    </>
  );
}

export default FilledCart;