import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import cartImage from "@/assets/img/svg/cart.svg";
import { PagePaths } from "@/enum/PagePaths";

function EmptyBasket() {
  return (
    <div className={classes["empty_cart__centered-container"]}>
      <div className={classes.empty_cart__image}>
        <img src={cartImage} alt="" />
      </div>
      <strong className={classes.empty_cart__title}>Корзина пуста</strong>
      <p className={classes.empty_cart__descr}>Но это никогда не поздно исправить :)</p>
      <Link
        to={PagePaths.CATALOG}
        className={["link", classes.empty_cart__link].join(" ")}
      >
        В каталог товаров
      </Link>
    </div>
  );
}

export default EmptyBasket;
