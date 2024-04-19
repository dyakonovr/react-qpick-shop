import { useQuery } from "@tanstack/react-query";
import type { IProductQueryData } from "@/types/features/product/query-data.types";
import ProductService from "@/services/product/product.service";

export const useProducts = (filters?: IProductQueryData) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => ProductService.getAll(filters)
  });

  return { data, isLoading, isSuccess, isError };
};
