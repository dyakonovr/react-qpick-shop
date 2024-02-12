import { useSearchParams } from "react-router-dom";

export const useQueryParams = (key: string) => {
  const [searchParams] = useSearchParams();
  return searchParams.get(key);
};
