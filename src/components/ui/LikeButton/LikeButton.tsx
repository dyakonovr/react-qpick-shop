import classes from './LikeButton.module.scss'
import { useRef } from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { addFavouriteItem, removeFavouriteItem } from '@store/favourites/FavouritesSlice';
import { useAppSelector } from '@hooks/useAppSelector';

function LikeButton({ productId }: {productId: number}) {
  const dispatch = useAppDispatch();
  const btnIsActive = useAppSelector(state => state.favouritesSlice.idList.includes(productId));
  const btnRef = useRef<HTMLButtonElement>(null);

  // Функции
  function handleClick() {
    if (btnRef.current) {
      const isActive = btnRef.current.classList.contains(classes["btn_like--active"]);

      if (isActive) {
        btnRef.current.classList.remove(classes["btn_like--active"]);
        dispatch(removeFavouriteItem(productId));
      } else {
        btnRef.current.classList.add(classes["btn_like--active"]);
        dispatch(addFavouriteItem(productId));
      }
    }
  }
  // Функции END


  return (
    <button ref={btnRef}
      className={btnIsActive ? `${classes.btn_like} ${classes["btn_like--active"]}` : classes.btn_like}
      onClick={() => handleClick()} data-product-id={productId}>
      <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3 5.71002C18.841 5.24601 18.2943 4.87797 17.6917 4.62731C17.0891 4.37666 16.4426 4.2484 15.79 4.25002C15.1373 4.2484 14.4909 4.37666 13.8883 4.62731C13.2857 4.87797 12.739 5.24601 12.28 5.71002L12 6.00002L11.72 5.72001C10.7917 4.79182 9.53273 4.27037 8.22 4.27037C6.90726 4.27037 5.64829 4.79182 4.72 5.72001C3.80386 6.65466 3.29071 7.91125 3.29071 9.22002C3.29071 10.5288 3.80386 11.7854 4.72 12.72L11.49 19.51C11.6306 19.6505 11.8212 19.7294 12.02 19.7294C12.2187 19.7294 12.4094 19.6505 12.55 19.51L19.32 12.72C20.2365 11.7823 20.7479 10.5221 20.7442 9.21092C20.7405 7.89973 20.2218 6.64248 19.3 5.71002Z"/>
      </svg>
    </button>
  );
};

export default LikeButton;