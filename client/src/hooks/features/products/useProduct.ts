import ProductService from '@/services/product/product.service';
import { useQuery } from '@tanstack/react-query';

export const useProduct = (id: number | string) => {
  const { data } = useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductService.getById(id),
  });

  return data;
};
