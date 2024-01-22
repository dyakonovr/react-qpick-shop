import ProductService from '@/services/product/product.service';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductService.getAll({ page: 1, perPage: 9 }),
    staleTime: Infinity,
  });

  return { data, isSuccess };
};
