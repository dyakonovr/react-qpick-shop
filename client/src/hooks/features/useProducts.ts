import { useQuery } from "@tanstack/react-query";
import ProductService from "@/services/product/product.service";
import { IProductQueryData } from "@/types/features/product/query-data.types";

export const useProducts = (filters?: IProductQueryData) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => ProductService.getAll(filters),
    staleTime: Infinity
  });

  return { data, isLoading, isSuccess, isError };
};
