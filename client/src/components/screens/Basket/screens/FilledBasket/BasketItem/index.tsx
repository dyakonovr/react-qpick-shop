import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import BasketItemQuantity from "./BasketItemQuantity";
import type { IBasketItem } from "@/types/features/basket-item.types";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { normalizePrice } from "@/functions/normalizePrice";
import { useActions } from "@/hooks/general/useActions";
import { useImageLoader } from "@/hooks/general/useImageLoader";

interface IBasketItemProps {
  basketItem: IBasketItem;
}

function BasketItem({ basketItem }: IBasketItemProps) {
  const { id: basketItemId, product, quantity } = basketItem;
  const { isImageLoaded } = useImageLoader(product.image);
  const { deleteProductFromBasket } = useActions();

  return (
    <li className={[classes.cart__item, classes.item].join(" ")} key={product.id}>
      <button
        className={classes["item__btn-delete"]}
        onClick={() => deleteProductFromBasket(basketItemId)}
        data-product-id={product.id}
      ></button>
      <Link to={`/item?id=${product.id}`} className={classes.item__content}>
        <div className={classes.item__image}>
          {isImageLoaded ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <Skeleton className="w-[140px] h-[140px]" />
          )}
        </div>
        <div className={classes.item__info}>
          <strong className={classes.item__title}>{product.name}</strong>
          <span className={classes.item__price}>{normalizePrice(product.price)}</span>
        </div>
      </Link>
      <div className={classes.item__footer}>
        <BasketItemQuantity id={basketItemId} quantity={quantity} />
        <span className={classes["item__total-price"]}>
          {normalizePrice(product.price * quantity)}
        </span>
      </div>
    </li>
  );
}

export default BasketItem;
