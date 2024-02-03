import { $axios } from '@/api/api.interceptor';
import { ExtendedProduct } from '@/types/product.types';
import {
  ProductDataType,
  ProductQueryData,
  ProductResponse,
} from './product.types';

class ProductService {
  private url = '/product';

  getAll = async (queryData = {} as ProductQueryData) => {
    const response = await $axios.post<ProductResponse>(
      `${this.url}/get-all`,
      queryData
    );
    return response.data;
  };

  getById = async (id: string | number) => {
    // return $axios.get<IProduct>(`${this.url}/${id}`);
    const response = await $axios.get<ExtendedProduct>(`${this.url}/${id}`);
    return response.data;
  };

  getBySimilar = async (id: string | number) => {
    return $axios.get<ExtendedProduct[]>(`${this.url}/similar/${id}`);
  };

  getBySlug = async (slug: string) => {
    return $axios.get<ExtendedProduct>(`${this.url}/by-slug/${slug}`);
  };

  getByCategory = async (categorySlug: string) => {
    return $axios.get<ExtendedProduct>(
      `${this.url}/by-category/${categorySlug}`
    );
  };

  create = async (data: ProductDataType) => {
    return $axios.post<ExtendedProduct>(this.url, data);
  };

  update = async (id: string | number, data: ProductDataType) => {
    return $axios.put<ExtendedProduct>(`${this.url}/${id}`, data);
  };

  delete = async (id: string | number) => {
    return $axios.delete<ExtendedProduct>(`${this.url}/${id}`);
  };
}

export default new ProductService();
