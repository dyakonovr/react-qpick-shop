import BasketItemSkeleton from "./BasketItem/skeleton";
import classes from "./styles.module.scss";
import { Skeleton } from "@/components/ui/skeleton";

function FilledBasketSkeleton() {
  return (
    <>
      <strong className="subtitle">Корзина</strong>
      <div className={classes.filled_cart__container}>
        <div className={classes.filled_cart__left}>
          <ul className={classes.filled_cart__list}>
            {[1, 2, 3].map((el) => (
              <BasketItemSkeleton key={el} />
            ))}
          </ul>
        </div>
        <div className={classes.filled_cart__right}>
          <div className={classes.filled_cart__wrapper}>
            <span className={classes.filled_cart__text}>ИТОГО</span>
            <Skeleton className="w-[52px] h-[22px]" />
          </div>
          <Skeleton className={["link", classes.filled_cart__link].join(" ")}>
            Перейти к оформлению
          </Skeleton>
        </div>
      </div>
    </>
  );
}

export default FilledBasketSkeleton;
