import { useEffect, useRef } from "react";

export const useOutsideClick = (
  ignoreRefs: Array<HTMLElement | null>,
  callback: () => void
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ignoreRefs.includes(event.target as HTMLElement)) return;

      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
