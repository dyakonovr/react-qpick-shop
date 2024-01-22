import { useActions } from '@/hooks/general/useActions';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { isProductInBasketSelector } from '@/store/slices/basket/basket.selectors';
import { getUserInfoSelector } from '@/store/slices/user/user.selectors';
import { IExtendedProduct } from '@/types/product.types';
import classes from './ItemButtons.module.scss';

interface IItemButtonsProps {
  product: IExtendedProduct;
}

function ItemButtons({ product }: IItemButtonsProps) {
  const { isAuth, isAdmin } = useTypedSelector(getUserInfoSelector);
  const { isAddedToBasket, basketItemId } = useTypedSelector(
    isProductInBasketSelector(product.id)
  );
  const { addProductToBasket, deleteProductFromBasket } = useActions();
  // const { isProductInBasket } = useBasket();
  // const { addProductToBasket, deleteProductFromBasket } = useBasketItem();
  // const { addProductToBasket, isProductInBasket } = useBasket();

  // const isAddedToBasket = isProductInBasket(product.id);

  return (
    <div className={classes.info__btns}>
      <button
        type="button"
        className={`link ${classes.info_btn}`}
        onClick={() =>
          !isAddedToBasket
            ? addProductToBasket(product.id)
            : deleteProductFromBasket(basketItemId)
        }
      >
        {isAddedToBasket ? 'Удалить из корзины' : 'Добавить в корзину'}
      </button>
      {isAdmin && (
        <>
          <button
            type="button"
            className={`link ${classes.info_btn} ${classes['info_btn--edit']}`}
            // onClick={isAuth ? handleAddToCartButton : () => navigate(PagePaths.AUTHENTICATION.LOGIN)}
          >
            Редактировать товар
          </button>
          <button
            type="button"
            className={`link ${classes.info_btn} ${classes['info_btn--delete']}`}
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
