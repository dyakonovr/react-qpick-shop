import classes from './styles.module.scss';
// @ts-ignore
import { ReactComponent as IconHeart } from '@/assets/img/svg/icon-heart.svg';
import { useActions } from '@/hooks/general/useActions';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { isProductInFavouritesSelector } from '@/store/slices/favourites/favourites.selectors';

interface ILikeButtonProps {
  productId: number;
};

function LikeButton({ productId }: ILikeButtonProps) {
  const isProductInFavourites = useTypedSelector(
    isProductInFavouritesSelector(productId)
  );

  const { addProductToFavourites, deleteProductFromFavourites } = useActions();

  const buttonClasses = isProductInFavourites
    ? `${classes.btn_like} ${classes['btn_like--active']}`
    : classes.btn_like;

  return (
    <button
      className={buttonClasses}
      onClick={
        !isProductInFavourites
          ? () => addProductToFavourites(productId)
          : () => deleteProductFromFavourites(productId)
      }
      data-product-id={productId}
    >
      <IconHeart />
    </button>
  );
}

export default LikeButton;
