import { useSearchParams } from 'react-router-dom';

export const useQueryParams = (key: string) => {
  const [searchParams, _] = useSearchParams();
  return searchParams.get(key);
};
