import { Skeleton } from '@/components/ui/skeleton';
import { useImageLoader } from '@/hooks/general/useImageLoader';
import classes from '../styles.module.scss';

type ItemImage = {
  src: string;
  alt: string;
};

function ItemImage({ src, alt }: ItemImage) {
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
