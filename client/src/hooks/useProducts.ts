import ProductService from "@/services/product/product.service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['get products'],
    queryFn: () => ProductService.getAll({ page: 1, perPage: 9 }),
    select: ({ data }) => data
  });

  return {data, isSuccess};
};