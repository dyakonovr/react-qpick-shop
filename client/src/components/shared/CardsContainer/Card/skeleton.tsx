import { Skeleton } from '@/components/ui/skeleton';
import classes from './styles.module.scss';
// @ts-ignore
import LikeButtonSkeleton from '../../LikeButton/skeleton';
import PriceSkeleton from '../../Price/skeleton';

function CardSkeleton() {
  return (
    <li className={classes.card}>
      <LikeButtonSkeleton />
      <a>
        <div className={classes.card__img}>
          <Skeleton className="w-[300px] h-[300px]" />
        </div>
        <div className={classes.card__wrapper}>
          <Skeleton className="w-[150px] h-[25px]" />
          <PriceSkeleton />
        </div>
        <span className={classes.card__grade}>
          <Skeleton className="w-[35px] h-[25px]" />
        </span>
      </a>
    </li>
  );
}

export default CardSkeleton;
