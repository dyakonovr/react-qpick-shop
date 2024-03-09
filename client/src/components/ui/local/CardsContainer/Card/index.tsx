import { Link } from "react-router-dom";
import LikeButton from "../../LikeButton";
import Price from "../../Price";
import Rating from "../../Rating";
import classes from "./styles.module.scss";
import type { IProduct } from "@/types/features/product/product.types";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { normalizeText } from "@/functions/normalizeText";
import { useImageLoader } from "@/hooks/general/useImageLoader";

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
          <strong className={classes.card__title} title={name}>
            {normalizeText(name)}
          </strong>
          <Price price={price} />
        </div>
        <Rating rating={rating} className="mt-auto" />
      </Link>
    </li>
  );
}

export default Card;