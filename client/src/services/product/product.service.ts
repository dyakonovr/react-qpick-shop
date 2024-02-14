import { IGetProductByIdResponse, IProductResponse } from "./product.types";
import { $axios } from "@/api/api.interceptor";
import {
  IExtendedProduct,
  IProductForCreating
} from "@/types/features/product/product.types";
import { IProductQueryData } from "@/types/features/product/query-data.types";

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

  getBySimilar = async (id: string | number) => {
    return $axios.get<IExtendedProduct[]>(`${this.url}/similar/${id}`);
  };

  getBySlug = async (slug: string) => {
    return $axios.get<IExtendedProduct>(`${this.url}/by-slug/${slug}`);
  };

  getByCategory = async (categorySlug: string) => {
    return $axios.get<IExtendedProduct>(`${this.url}/by-category/${categorySlug}`);
  };

  create = async (data: IProductForCreating) => {
    return $axios.post<IExtendedProduct>(this.url, data);
  };

  update = async (id: string | number, data: IProductForCreating) => {
    return $axios.put<IExtendedProduct>(`${this.url}/${id}`, data);
  };

  delete = async (id: string | number) => {
    return $axios.delete<IExtendedProduct>(`${this.url}/${id}`);
  };
}

export default new ProductService();
