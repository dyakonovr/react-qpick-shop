import type { IGetProductByIdResponse, IProductResponse } from "./product.types";
import type {
  IExtendedProduct,
  IProductForCreating
} from "@/types/features/product/product.types";
import type { IProductQueryData } from "@/types/features/product/query-data.types";
import { $axios } from "@/api/api.interceptor";

class ProductService {
  private url = "/product";

  getAll = async (queryData = {} as IProductQueryData) => {
    const response = await $axios.post<IProductResponse>(
      `${this.url}/get-all`,
      queryData
    );
    return response.data;
  };

  getById = async (id: string | number) => {
    const response = await $axios.get<IGetProductByIdResponse>(`${this.url}/${id}`);
    return response.data;
  };
}

export default new ProductService();
