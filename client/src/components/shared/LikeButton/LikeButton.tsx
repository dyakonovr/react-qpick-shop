import { useRef } from 'react';
import classes from './LikeButton.module.scss';
// @ts-ignore
import { ReactComponent as IconHeart } from '@/assets/img/svg/icon-heart.svg';
import { useFavourites } from '@/hooks/features/useFavourites';

interface ILikeButtonProps {
  productId: number;
}

function LikeButton({ productId }: ILikeButtonProps) {
  const { isProductInFavourites, toggleFavourite } = useFavourites();

  const btnRef = useRef<HTMLButtonElement>(null);

  const buttonClasses = isProductInFavourites(productId)
    ? `${classes.btn_like} ${classes['btn_like--active']}`
    : classes.btn_like;

  return (
    <button
      ref={btnRef}
      className={buttonClasses}
      onClick={() => toggleFavourite(productId)}
      data-product-id={productId}
    >
      <IconHeart />
    </button>
  );
}

export default LikeButton;
