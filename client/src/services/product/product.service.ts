import { $axios } from '@/api/api.interceptor';
import { IExtendedProduct } from '@/interfaces/product.interface';
import {
  IProductResponse,
  ProductDataFiltersType,
  ProductDataType,
} from './product.types';

class ProductService {
  private url = '/product';

  getAll = async (queryData = {} as ProductDataFiltersType) => {
    // return $axios.get<IProductResponse>(this.url + "asf", { params: queryData });
    const response = await $axios.get<IProductResponse>(this.url, {
      params: queryData,
    });
    return response.data;
  };

  getById = async (id: string | number) => {
    // return $axios.get<IProduct>(`${this.url}/${id}`);
    const response = await $axios.get<IExtendedProduct>(`${this.url}/${id}`);
    return response.data;
  };

  getBySimilar = async (id: string | number) => {
    return $axios.get<IExtendedProduct[]>(`${this.url}/similar/${id}`);
  };

  getBySlug = async (slug: string) => {
    return $axios.get<IExtendedProduct>(`${this.url}/by-slug/${slug}`);
  };

  getByCategory = async (categorySlug: string) => {
    return $axios.get<IExtendedProduct>(
      `${this.url}/by-category/${categorySlug}`
    );
  };

  create = async (data: ProductDataType) => {
    return $axios.post<IExtendedProduct>(this.url, data);
  };

  update = async (id: string | number, data: ProductDataType) => {
    return $axios.put<IExtendedProduct>(`${this.url}/${id}`, data);
  };

  delete = async (id: string | number) => {
    return $axios.delete<IExtendedProduct>(`${this.url}/${id}`);
  };
}

export default new ProductService();
