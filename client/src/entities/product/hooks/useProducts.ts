import { useQuery } from "@tanstack/react-query";
import { ProductService, type IGetAllProductsRequestParams } from "../service";
import type { IProduct } from "../model";

interface IUseProductsResponse {
  data: IProduct[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

const productService = new ProductService();

export const useProducts = (
  reqParams?: IGetAllProductsRequestParams
): IUseProductsResponse => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["products", reqParams],
    queryFn: () => productService.getAll(reqParams)
  });

  return { data: data?.products || [], isLoading, isSuccess, isError };
};
