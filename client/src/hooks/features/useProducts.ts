import ProductService from '@/services/product/product.service';
import { IProductQueryData } from '@/types/product/query-data.types';
import { useQuery } from '@tanstack/react-query';

export const useProducts = (filters?: IProductQueryData) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => ProductService.getAll(filters),
    staleTime: Infinity,
  });

  return { data, isLoading, isSuccess, isError };
};
