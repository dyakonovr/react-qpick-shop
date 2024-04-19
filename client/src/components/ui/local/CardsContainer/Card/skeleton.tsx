import LikeButtonSkeleton from "../../LikeButton/skeleton";
import PriceSkeleton from "../../Price/skeleton";
import classes from "./styles.module.scss";
import { Skeleton } from "@/components/ui/shadcn/skeleton";

function CardSkeleton() {
  return (
    <li className={classes.card}>
      <LikeButtonSkeleton />
      <div>
        <div className={classes.card__img}>
          <Skeleton className="w-full max-w-[300px] h-[300px] mx-auto" />
        </div>
        <div className={classes.card__wrapper}>
          <Skeleton className="w-full max-w-[150px] h-[25px]" />
          <PriceSkeleton />
        </div>
        <span className={classes.card__grade}>
          <Skeleton className="w-full max-w-[35px] h-[25px]" />
        </span>
      </div>
    </li>
  );
}

export default CardSkeleton;
