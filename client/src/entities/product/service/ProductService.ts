import type { IProductService } from "./IProductService";
import type { IGetAllProductsRequestParams, IGetAllProductsResponse } from "./dtos";
import { $axios } from "@/api/api.interceptor";

export class ProductService implements IProductService {
  private url = "/product";

  getAll = async (queryParams = {} as IGetAllProductsRequestParams) => {
    const response = await $axios.post<IGetAllProductsResponse>(
      `${this.url}/get-all`,
      queryParams
    );
    return response.data;
  };
}
