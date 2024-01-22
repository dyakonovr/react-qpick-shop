import { useRef } from 'react';
import classes from './LikeButton.module.scss';
// @ts-ignore
import { ReactComponent as IconHeart } from '@/assets/img/svg/icon-heart.svg';
import { useActions } from '@/hooks/general/useActions';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { isProductInFavouritesSelector } from '@/store/slices/favourites/favourites.selectors';

interface ILikeButtonProps {
  productId: number;
}

function LikeButton({ productId }: ILikeButtonProps) {
  const favourites = useTypedSelector(state => state.favourites.data);

  const isProductInFavourites = useTypedSelector(
    isProductInFavouritesSelector(productId)
  );

  const { addProductToFavourites, deleteProductFromFavourites } = useActions();

  const btnRef = useRef<HTMLButtonElement>(null);

  const buttonClasses = isProductInFavourites
    ? `${classes.btn_like} ${classes['btn_like--active']}`
    : classes.btn_like;

  return (
    <button
      ref={btnRef}
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
