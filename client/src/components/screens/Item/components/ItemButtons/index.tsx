import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { useNotifyUnauthorizedAction } from "@/hooks/general/useNotifyUnauthorizedAction";
import { useActions } from "@/hooks/general/useActions";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { isProductInBasketSelector } from "@/store/slices/basket/basket.selectors";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";
import { PagePaths } from "@/enum/PagePaths";

interface IItemButtonsProps {
  productId: number;
}

function ItemButtons({ productId }: IItemButtonsProps) {
  const { isAuth, isAdmin } = useTypedSelector(getUserInfoSelector);
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
    <div className={classes.info__btns}>
      <button
        type="button"
        className={`link ${classes.info_btn}`}
        onClick={handleBasketButtonClick}
      >
        {isAddedToBasket ? "Удалить из корзины" : "Добавить в корзину"}
      </button>
      {isAdmin && (
        <Link to={PagePaths.ADMIN.HOME} className={`link ${classes.info_btn}`}>
          Перейти в админку
        </Link>
      )}
    </div>
  );
}

export default ItemButtons;
