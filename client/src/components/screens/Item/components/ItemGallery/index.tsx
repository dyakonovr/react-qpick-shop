import ItemGalleryCarousel from "./components/ItemGalleryCarousel";
import ItemGalleryGrid from "./components/ItemGalleryGrid";
import type { IProductGallery } from "./product-gallery.type";

interface IItemGalleryProps extends IProductGallery {
  productName: string;
}

function ItemGallery({ gallery, productName }: IItemGalleryProps) {
  return gallery.length > 3 ? (
    <ItemGalleryCarousel gallery={gallery} productName={productName} />
  ) : (
    <ItemGalleryGrid gallery={gallery} productName={productName} />
  );
}

export default ItemGallery;
