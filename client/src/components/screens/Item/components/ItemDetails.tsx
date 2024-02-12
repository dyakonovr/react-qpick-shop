import classes from "../styles.module.scss";
import Price from "@/components/shared/Price";
import { IExtendedProduct } from "@/types/product/product.types";

type IItemDetailsProps = Pick<IExtendedProduct, "id" | "name" | "category" | "price">;

function ItemDetails({ id, name, category, price }: IItemDetailsProps) {
  return (
    <div className={classes.content__footer}>
      <div className="flex flex-col">
        <strong className="subtitle subtitle--gray">{category}</strong>
        <strong className={classes.content__title}>{name}</strong>
        <span className="text-neutral-500">Артикул {id}</span>
      </div>

      <Price price={price} isBigFont={true} />
    </div>
  );
}

export default ItemDetails;
