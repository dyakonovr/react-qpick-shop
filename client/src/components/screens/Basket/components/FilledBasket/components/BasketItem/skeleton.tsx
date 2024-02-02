import { Skeleton } from '@/components/ui/skeleton';
import classes from './styles.module.scss';

function BasketItemSkeleton() {
  return (
    <li className={[classes.cart__item, classes.item].join(' ')}>
      <button className={classes['item__btn-delete']}></button>
      <div className={classes.item__content}>
        <div className={classes.item__image}>
          <Skeleton className="w-[140px] h-[140px]" />
        </div>
        <div className={classes.item__info}>
          <Skeleton className="w-[200px] h-[25px]" />
          <Skeleton className="w-[37px] h-[22px]" />
        </div>
      </div>
      <div className={classes.item__footer}>
        <Skeleton className="w-[117px] h-[30px]" />
        <Skeleton className="w-[55px] h-[22px]" />
      </div>
    </li>
  );
}

export default BasketItemSkeleton;
