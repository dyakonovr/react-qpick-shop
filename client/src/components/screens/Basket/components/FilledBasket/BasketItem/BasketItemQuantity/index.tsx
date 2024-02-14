import { useEffect, useState } from "react";
import classes from "../styles.module.scss";
import BasketItemQuantityInput from "./BasketItemQuantityInput";
import { IBasketItem } from "@/types/features/basket-item.types";
import useDebounce from "@/hooks/general/useDebounce";
import { useActions } from "@/hooks/general/useActions";

type IBasketItemQuantityProps = Pick<IBasketItem, "quantity" | "id">;

function BasketItemQuantity({
  quantity: initialQuantity,
  id: basketItemId
}: IBasketItemQuantityProps) {
  const [productQuantity, setProductQuantity] = useState(initialQuantity);
  const debouncedProductQuantity = useDebounce<number>(productQuantity, 500);
  const { updateBasketItemQuantity } = useActions();

  useEffect(() => {
    if (debouncedProductQuantity === initialQuantity) return;

    updateBasketItemQuantity({
      basketItemId,
      quantity: debouncedProductQuantity
    });
  }, [debouncedProductQuantity]);

  return (
    <div className={classes.item__counter}>
      <button
        disabled={productQuantity <= 1}
        onClick={() => setProductQuantity((prev) => prev - 1)}
        className={`${classes.item__btn} ${classes["item__btn--minus"]}`}
      ></button>
      <BasketItemQuantityInput
        productQuantity={debouncedProductQuantity}
        setProductQuantity={setProductQuantity}
      />
      <button
        disabled={productQuantity >= 10}
        onClick={() => setProductQuantity((prev) => prev + 1)}
        className={`${classes.item__btn} ${classes["item__btn--plus"]}`}
      ></button>
    </div>
  );
}

export default BasketItemQuantity;
