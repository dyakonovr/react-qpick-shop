import { useQuery } from "@tanstack/react-query";
import ProductService from "@/services/product/product.service";

export const useProduct = (id: number | string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => ProductService.getById(id)
  });

  return {
    data,
    isLoading,
    isError
  };
};
