import ProductService from '@/services/product/product.service';
import { ProductQueryData } from '@/services/product/product.types';
import { useQuery } from '@tanstack/react-query';

export const useProducts = (filters?: ProductQueryData) => {
  const { data, isSuccess } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => ProductService.getAll(filters),
    staleTime: Infinity,
  });

  return { data, isSuccess };
};
