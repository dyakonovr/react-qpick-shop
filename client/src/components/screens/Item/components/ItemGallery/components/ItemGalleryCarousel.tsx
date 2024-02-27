import ItemImage from "./ItemImage";
import type { IProductGallery } from "../product-gallery.type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/shadcn/carousel";

interface IItemGalleryCarouselProps extends IProductGallery {
  productName: string;
}

function ItemGalleryCarousel({ gallery, productName }: IItemGalleryCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start"
      }}
      className="w-full"
    >
      <CarouselContent>
        {gallery.map((image, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ItemImage
                src={image}
                alt={`Фото ${productName} №${idx + 1}`}
                key={image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ItemGalleryCarousel;
