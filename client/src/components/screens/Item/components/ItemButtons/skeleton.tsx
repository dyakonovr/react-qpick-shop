import { Skeleton } from '@/components/ui/skeleton';
import { useTypedSelector } from '@/hooks/general/useTypedSelector';
import { getUserInfoSelector } from '@/store/slices/user/user.selectors';
import classes from './styles.module.scss';

function ItemButtonsSkeleton() {
  const { isAdmin } = useTypedSelector(getUserInfoSelector);
  return (
    <div className={classes.info__btns}>
      <Skeleton className="w-full h-[45px] rounded-[20px]" />
      {isAdmin && (
        <>
          <Skeleton className="w-full h-[45px] rounded-[20px]" />
          <Skeleton className="w-full h-[45px] rounded-[20px]" />
        </>
      )}
    </div>
  );
}

export default ItemButtonsSkeleton;
