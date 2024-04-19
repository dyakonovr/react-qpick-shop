import classes from "./styles.module.scss";
import { Skeleton } from "@/components/ui/shadcn/skeleton";

interface IPriceSkeletonProps {
  isBigFont?: boolean;
}

function PriceSkeleton({ isBigFont = false }: IPriceSkeletonProps) {
  const classNames = isBigFont
    ? `${classes.prices} ${classes["prices--big"]}`
    : classes.prices;

  return <Skeleton className={[classNames, "w-[55px] h-[25px] ml-auto"].join(" ")} />;
}

export default PriceSkeleton;
