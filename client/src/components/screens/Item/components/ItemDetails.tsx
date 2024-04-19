import classes from "../styles.module.scss";
import type { IExtendedProduct } from "@/types/features/product/product.types";

type IItemDetailsProps = Pick<IExtendedProduct, "id" | "name" | "categoryName">;

function ItemDetails({ id, name, categoryName }: IItemDetailsProps) {
  return (
    <div className={classes.content__footer}>
      <div className="flex flex-col">
        <strong className="subtitle subtitle--gray">{categoryName}</strong>
        <strong className={classes.content__title}>{name}</strong>
        <span className="text-neutral-500">Артикул {id}</span>
      </div>
    </div>
  );
}

export default ItemDetails;
