import classes from "../../../styles.module.scss";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { useImageLoader } from "@/hooks/general/useImageLoader";

interface IItemImageProps {
  src: string;
  alt: string;
}

function ItemImage({ src, alt }: IItemImageProps) {
  const { isImageLoaded } = useImageLoader(src);

  return (
    <div className={classes.content__photo}>
      {isImageLoaded ? (
        <img src={src} alt={alt} />
      ) : (
        <Skeleton className="w-[300px] h-[300px]" />
      )}
    </div>
  );
}

export default ItemImage;
