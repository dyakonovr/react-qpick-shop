import ProductService from '@/services/product/product.service';
import { useQuery } from '@tanstack/react-query';
import { IProductFitlers } from './filters.types';

export const useProducts = (filters?: IProductFitlers) => {
  const { data, isSuccess } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => ProductService.getAll({filters}),
    staleTime: Infinity,
  });

  return { data, isSuccess };
};
