import classes from './LikeButton.module.scss'
import { useRef } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addFavouriteItem, removeFavouriteItem } from 'store/favourites/FavouritesSlice';
import { useAppSelector } from 'hooks/useAppSelector';
// @ts-ignore
import { ReactComponent as IconHeart } from "assets/img/svg/icon-heart.svg";

interface ILikeButtonProps {
  productId: number
}

function LikeButton({ productId }: ILikeButtonProps) {
  const dispatch = useAppDispatch();
  const btnIsActive = useAppSelector(state => state.favouritesSlice.idList.includes(productId));
  const btnRef = useRef<HTMLButtonElement>(null);

  // Функции
  function handleClick() {
    if (!btnRef.current) return;

    if (btnIsActive) dispatch(removeFavouriteItem(productId));
    else dispatch(addFavouriteItem(productId));
  }
  // Функции END

  return (
    <button
      ref={btnRef}
      className={btnIsActive ? `${classes.btn_like} ${classes["btn_like--active"]}` : classes.btn_like}
      onClick={handleClick} data-product-id={productId}
    >
      <IconHeart />
    </button>
  );
};

export default LikeButton;