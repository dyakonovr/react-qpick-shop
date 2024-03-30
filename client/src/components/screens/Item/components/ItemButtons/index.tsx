import classes from "./styles.module.scss";
import { useNotifyUnauthorizedAction } from "@/hooks/general/useNotifyUnauthorizedAction";
import { useActions } from "@/hooks/general/useActions";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { isProductInBasketSelector } from "@/store/slices/basket/basket.selectors";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";
import Rating from "@/components/ui/local/Rating";
import Price from "@/components/ui/local/Price";

interface IItemButtonsProps {
  productId: number;
  price: number;
  rating: number;
}

function ItemButtons({ productId, price, rating }: IItemButtonsProps) {
  const { isAuth } = useTypedSelector(getUserInfoSelector);
  const { isAddedToBasket, basketItemId } = useTypedSelector(
    isProductInBasketSelector(productId)
  );
  const { addProductToBasket, deleteProductFromBasket } = useActions();
  const notifyUnauthorizedAction = useNotifyUnauthorizedAction();

  // Функции
  function handleBasketButtonClick() {
    if (!isAuth) return notifyUnauthorizedAction();

    return !isAddedToBasket
      ? addProductToBasket(productId)
      : deleteProductFromBasket(basketItemId);
  }
  // Функции END

  return (
    <div className={[classes.info__btns, "rounded_white_block h-max"].join(" ")}>
      <div className="flex flex-col items-end">
        <Rating rating={rating} />
        <Price price={price} isBigFont={true} />
      </div>

      <button
        type="button"
        className={`link ${classes.info_btn}`}
        onClick={handleBasketButtonClick}
      >
        {isAddedToBasket ? "Удалить из корзины" : "Добавить в корзину"}
      </button>
    </div>
  );
}

export default ItemButtons;
