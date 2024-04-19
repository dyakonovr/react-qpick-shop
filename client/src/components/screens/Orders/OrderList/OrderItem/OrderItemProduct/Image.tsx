import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { useImageLoader } from "@/hooks/general/useImageLoader";

function OrderItemProductImage({ imagePath }: { imagePath: string }) {
  const { isImageLoaded } = useImageLoader(imagePath);

  return isImageLoaded ? (
    <img src={imagePath} className="max-w-[100px] max-h-[100px]" />
  ) : (
    <Skeleton className="max-w-[100px] max-h-[100px]" />
  );
}

export default OrderItemProductImage;
