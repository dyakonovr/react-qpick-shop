import { toast } from "sonner";
import BasketItem from "./BasketItem";
import classes from "./styles.module.scss";
import type { IBasketItem } from "@/types/features/basket-item.types";
import { normalizePrice } from "@/functions/normalizePrice";
import { useActions } from "@/hooks/general/useActions";

interface IFilledBasketPageProps {
  basketItems: IBasketItem[];
  total: number;
}

function FilledBasketPage({ basketItems, total }: IFilledBasketPageProps) {
  const { createOrder } = useActions();

  // Функции
  function createOrderFx() {
    if (!confirm("Вы точно хотите оформить заказ?")) return;

    toast("Заказ оформлен!", {
      description: `Больше информации смотрите на странице Заказов`
    });
    createOrder({ items: basketItems });
  }

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
          {/* <Link to="/order" className={["link", classes.filled_cart__link].join(" ")}>
            Перейти к оформлению
          </Link> */}
          <button
            className={["link", classes.filled_cart__link].join(" ")}
            onClick={createOrderFx}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </>
  );
}

export default FilledBasketPage;
