import { Link } from "react-router-dom";
import BasketItem from "./BasketItem";
import classes from "./styles.module.scss";
import { normalizePrice } from "@/functions/normalizePrice";
import { IBasketItem } from "@/types/basket-item.types";

interface IFilledBasketPageProps {
  basketItems: IBasketItem[];
  total: number;
}

function FilledBasketPage({ basketItems, total }: IFilledBasketPageProps) {
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
            <span className={classes.filled_cart__total}>{normalizePrice(total)}</span>
          </div>
          <Link to="/order" className={["link", classes.filled_cart__link].join(" ")}>
            Перейти к оформлению
          </Link>
        </div>
      </div>
    </>
  );
}

export default FilledBasketPage;
