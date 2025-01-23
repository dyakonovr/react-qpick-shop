import classes from "./styles.module.scss";
// @ts-ignore
import { ReactComponent as IconHeart } from "@/app/assets/img/svg/icon-heart.svg";
import { useActions } from "@/shared/hooks/useActions";
import { useTypedSelector } from "@/shared/hooks/useTypedSelector";
import { isProductInFavouritesSelector } from "@/store/slices/favourites/favourites.selectors";

interface ILikeButtonProps {
  productId: number;
}

export function LikeButton({ productId }: ILikeButtonProps) {
  const isProductInFavourites = useTypedSelector(
    isProductInFavouritesSelector(productId)
  );

  const { addProductToFavourites, deleteProductFromFavourites } = useActions();

  const buttonClasses = isProductInFavourites
    ? `${classes.btn_like} ${classes["btn_like--active"]}`
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
