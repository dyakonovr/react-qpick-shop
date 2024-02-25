import classes from "../styles.module.scss";
import { IExtendedProduct } from "@/types/features/product/product.types";

type IItemInfoProps = Pick<IExtendedProduct, "info">;

function ItemInfo({ info }: IItemInfoProps) {
  return (
    <div className={classes.info__wrapper}>
      <strong className={`subtitle rounded_white_block ${classes.info__title}`}>
        Описание и характеристики
      </strong>
      <div className={classes.info__container}>
        {info.map((infoObject) => (
          <p className={classes.info__text} key={infoObject.name}>
            {`${infoObject.name}: ${infoObject.value}`}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ItemInfo;
