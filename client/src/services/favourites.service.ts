import type { IProduct } from "@/types/features/product/product.types";
import { $axios } from "@/api/api.interceptor";

class FavouritesService {
  private url = "/favourites";

  getAll = async () => {
    const response = await $axios.get<IProduct[]>(this.url);
    return response.data;
  };

  create = async (productId: string | number) => {
    const response = await $axios.post<IProduct>(`${this.url}/${productId}`);
    return response.data;
  };

  delete = async (productId: string | number) => {
    $axios.delete(`${this.url}/${productId}`);
  };
}

export default new FavouritesService();
