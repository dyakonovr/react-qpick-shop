import deliveryMapImage from "@/assets/img/delivery-map.jpg";
import { IProduct } from "@/interfaces/IProduct";
import CartProduct from "../CartProduct/CartProduct";
import classes from "./FilledCart.module.scss";
import { Link } from "react-router-dom";

interface IFilledCartProps {
  products: IProduct[]
}
 
function FilledCart({ products }: IFilledCartProps) {
  return (
    <>
      <strong className="subtitle">Корзина</strong>
      <div className={classes.filled_cart__container}>
        <div className={classes.filled_cart__left}>
          <ul className={classes.filled_cart__list}>
            {products.map(product => <CartProduct product={product} />)}
          </ul>
          {/* <div className={classes.filled_cart__delivery}>
            <strong className="subtitle">Доставка</strong>
            <div className={classes["cart__delivery-image"]}><img src={deliveryMapImage} alt="" /></div>
            <div className={classes["cart__delivery-footer"]}>
              <p className={classes["cart__delivery-text"]}>Доставка курьером</p>
              <button className={classes["cart__delivery-btn"]}></button>
              <span className={classes["cart__delivery-price"]}>{normalizePrice(deliveryPrice)}</span>
            </div>
          </div> */}
        </div>
        <div className={classes.filled_cart__right}>
          <div className={classes.filled_cart__wrapper}>
            <span className={classes.filled_cart__text}>ИТОГО</span>
            {/* <span className={classes.filled_cart__total}>{normalizePrice(totalPrice)}</span> */}
          </div>
          <Link to="/order" className={["link", classes.filled_cart__link].join(' ')}>Перейти к оформлению</Link>
        </div>
      </div>
    </>
  );
}

export default FilledCart;