import classes from "./styles.module.scss";
import type { IProduct } from "@/types/features/product/product.types";
import { normalizeRating } from "@/functions/normalizeRating";
import { cn } from "@/functions/shadcn-utils";

type IRatingProps = Pick<IProduct, "rating"> & React.HTMLAttributes<HTMLSpanElement>;

function Rating({ rating, className }: IRatingProps) {
  return <span className={cn(classes.rating, className)}>{normalizeRating(rating)}</span>;
}

export default Rating;
