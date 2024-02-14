import classes from "./styles.module.scss";
import { useNotifyUnauthorizedAction } from "@/hooks/general/useNotifyUnauthorizedAction";
import { useActions } from "@/hooks/general/useActions";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { isProductInBasketSelector } from "@/store/slices/basket/basket.selectors";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";
import { IExtendedProduct } from "@/types/features/product/product.types";

interface IItemButtonsProps {
  product: IExtendedProduct;
}

function ItemButtons({ product }: IItemButtonsProps) {
  const { isAuth, isAdmin } = useTypedSelector(getUserInfoSelector);
  const { isAddedToBasket, basketItemId } = useTypedSelector(
    isProductInBasketSelector(product.id)
  );
  const { addProductToBasket, deleteProductFromBasket } = useActions();
  const notifyUnauthorizedAction = useNotifyUnauthorizedAction();

  // Функции
  function handleBasketButtonClick() {
    if (!isAuth) notifyUnauthorizedAction();

    return !isAddedToBasket
      ? addProductToBasket(product.id)
      : deleteProductFromBasket(basketItemId);
  }
  // Функции END

  return (
    <div className={classes.info__btns}>
      <button
        type="button"
        className={`link ${classes.info_btn}`}
        onClick={handleBasketButtonClick}
      >
        {isAddedToBasket ? "Удалить из корзины" : "Добавить в корзину"}
      </button>
      {isAdmin && (
        <>
          <button
            type="button"
            className={`link ${classes.info_btn} ${classes["info_btn--edit"]}`}
            // onClick={isAuth ? handleAddToCartButton : () => navigate(PagePaths.AUTHENTICATION.LOGIN)}
          >
            Редактировать товар
          </button>
          <button
            type="button"
            className={`link ${classes.info_btn} ${classes["info_btn--delete"]}`}
            // onClick={isAuth ? handleAddToCartButton : () => navigate(PagePaths.AUTHENTICATION.LOGIN)}
          >
            Удалить товар
          </button>
        </>
      )}
    </div>
  );
}

export default ItemButtons;
