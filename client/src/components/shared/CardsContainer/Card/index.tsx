import { Link } from "react-router-dom";
import LikeButton from "../../LikeButton";
import Price from "../../Price";
import classes from "./styles.module.scss";
import { Skeleton } from "@/components/ui/skeleton";
import { normalizeRating } from "@/functions/normalizeRating";
import { normalizeText } from "@/functions/normalizeText";
import { useImageLoader } from "@/hooks/general/useImageLoader";
import { IProduct } from "@/types/product/product.types";

function Card({ id, name, price, image: imagePath, rating }: IProduct) {
  const { isImageLoaded } = useImageLoader(imagePath);

  return (
    <li className={classes.card} data-id={id}>
      <LikeButton productId={id} />
      <Link to={`/item?id=${id}`}>
        <div className={classes.card__img}>
          {isImageLoaded ? (
            <img src={imagePath} alt={name} />
          ) : (
            <Skeleton className="w-[300px] h-[300px]" />
          )}
        </div>
        <div className={classes.card__wrapper}>
          <strong className={classes.card__title}>{normalizeText(name)}</strong>
          <Price price={price} />
        </div>
        <span className={classes.card__grade}>{normalizeRating(rating)}</span>
      </Link>
    </li>
  );
}

export default Card;
