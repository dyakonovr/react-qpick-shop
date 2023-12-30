import { $axios } from '@/api/api.interceptor';
import { IProduct } from "@/interfaces/product.interface";
import { ProductDataFiltersType, ProductDataType } from "./product.types";

class ProductService {
  private url = "/product"; 

  getAll = async (queryData = {} as ProductDataFiltersType) => {
    return $axios.get<IProduct[]>(this.url, { params: queryData });
  }

  getById = async (id: string | number) => {
    return $axios.get<IProduct>(`${this.url}/${id}`);
  }

  getBySimilar = async (id: string | number) => {
    return $axios.get<IProduct[]>(`${this.url}/similar/${id}`);
  }

  getBySlug = async (slug: string) => {
    return $axios.get<IProduct>(`${this.url}/by-slug/${slug}`);
  }

  getByCategory = async (categorySlug: string) => {
    return $axios.get<IProduct>(`${this.url}/by-category/${categorySlug}`);
  }

  create = async (data: ProductDataType) => {
    return $axios.post<IProduct>(this.url, data);
  }

  update = async (id: string | number, data: ProductDataType) => {
    return $axios.put<IProduct>(`${this.url}/${id}`, data);
  }

  delete = async (id: string | number) => {
    return $axios.delete<IProduct>(`${this.url}/${id}`);
  }
}

export default new ProductService();