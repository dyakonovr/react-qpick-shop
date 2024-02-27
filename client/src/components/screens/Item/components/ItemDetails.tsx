import classes from "../styles.module.scss";
import type { IExtendedProduct } from "@/types/features/product/product.types";
import Price from "@/components/ui/local/Price";
import Rating from "@/components/ui/local/Rating";

type IItemDetailsProps = Pick<
  IExtendedProduct,
  "id" | "name" | "category" | "price" | "rating"
>;

function ItemDetails({ id, name, category, price, rating }: IItemDetailsProps) {
  return (
    <div className={classes.content__footer}>
      <div className="flex flex-col">
        <strong className="subtitle subtitle--gray">{category}</strong>
        <strong className={classes.content__title}>{name}</strong>
        <span className="text-neutral-500">Артикул {id}</span>
      </div>

      <div className="flex flex-col items-end">
        <Rating rating={rating} />
        <Price price={price} isBigFont={true} />
      </div>
    </div>
  );
}

export default ItemDetails;
