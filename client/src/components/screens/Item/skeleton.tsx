import LikeButtonSkeleton from '@/components/shared/LikeButton/skeleton';
import PriceSkeleton from '@/components/shared/Price/skeleton';
import { Skeleton } from '@/components/ui/skeleton';
import { MoveLeft } from 'lucide-react';
import classes from './styles.module.scss';
import ItemButtonsSkeleton from './components/ItemButtons/skeleton';

function ItemSkeleton() {
  return (
    <section className={classes.item}>
      <strong className={`subtitle ${classes.item__back_link}`}>
        <MoveLeft /> Назад
      </strong>
      <div className={`block ${classes.content}`}>
        <div className={classes.content__main}>
          <LikeButtonSkeleton />
          <div className={classes.content__photos}>
            {[1, 2, 3].map((el) => (
              <div className={classes.content__photo} key={el}>
                <Skeleton
                  className={[
                    classes.content__photo,
                    'w-[300px] h-[300px]',
                  ].join(' ')}
                  key={el}
                />
              </div>
            ))}
          </div>
          <div className={classes.content__footer}>
            <div>
              <Skeleton className="w-[200px] h-[30px]" />
              <Skeleton className="w-[380px] h-[30px]" />
            </div>
            <PriceSkeleton isBigFont />
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__wrapper}>
          <strong className={`subtitle block ${classes.info__title}`}>
            Описание и характеристики
          </strong>
          <div className={classes.info__container}>
            {[1, 2, 3].map((el) => (
              <Skeleton className="w-full h-[23px]" key={el} />
            ))}
          </div>
        </div>
        <ItemButtonsSkeleton />
      </div>
    </section>
  );
}

export default ItemSkeleton;
