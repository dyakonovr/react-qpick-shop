import { useState, useEffect } from "react";

export const useImageLoader = (src: string) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, [src]);

  return { isImageLoaded };
};
