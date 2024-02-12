import classes from "../../styles.module.scss";
import ItemImage from "./ItemImage";
import { IExtendedProduct } from "@/types/product/product.types";

interface IItemGalleryProps extends Pick<IExtendedProduct, "gallery"> {
  productName: string;
}

function ItemGallery({ gallery, productName }: IItemGalleryProps) {
  return (
    <div className={classes.content__photos}>
      {gallery.map((image, idx) => (
        <ItemImage src={image} alt={`Фото ${productName} №${idx + 1}`} key={image} />
      ))}
    </div>
  );
}

export default ItemGallery;
