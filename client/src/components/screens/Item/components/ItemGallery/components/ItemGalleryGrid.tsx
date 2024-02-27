import classes from "../../../styles.module.scss";
import ItemImage from "./ItemImage";
import type { IProductGallery } from "../product-gallery.type";

interface IItemGalleryGridProps extends IProductGallery {
  productName: string;
}

function ItemGalleryGrid({ productName, gallery }: IItemGalleryGridProps) {
  return (
    <div className={classes.content__photos}>
      {gallery.map((image, idx) => (
        <ItemImage src={image} alt={`Фото ${productName} №${idx + 1}`} key={image} />
      ))}
    </div>
  );
}

export default ItemGalleryGrid;
