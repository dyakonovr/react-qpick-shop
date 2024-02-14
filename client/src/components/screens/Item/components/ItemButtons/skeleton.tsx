import classes from "./styles.module.scss";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";
import { getUserInfoSelector } from "@/store/slices/user/user.selectors";

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
