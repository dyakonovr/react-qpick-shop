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

  create = async (data: IProductForCreating) => {
    return $axios.post(`${this.url}/create`, data);
  };

  update = async (id: string | number, data: IProductForCreating) => {
    return $axios.put<IExtendedProduct>(`${this.url}/${id}`, data);
  };

  delete = async (id: string | number) => {
    return $axios.delete(`${this.url}/${id}`);
  };
}

export default new ProductService();
