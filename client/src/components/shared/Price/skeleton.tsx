import { Skeleton } from "@/components/ui/skeleton";
import classes from './styles.module.scss'

type PriceSkeletonProps = {
  isBigFont?: boolean;
}

function PriceSkeleton({ isBigFont = false }: PriceSkeletonProps) {
  const classNames = isBigFont
    ? `${classes.prices} ${classes['prices--big']}`
    : classes.prices;

  return <Skeleton className={[classNames, "w-[55px] h-[25px] ml-auto"].join(' ')} />;
};

export default PriceSkeleton;