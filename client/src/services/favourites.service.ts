import { $axios } from "@/api/api.interceptor";
import { IProduct } from "@/types/product/product.types";

class FavouritesService {
  private url = "/favourites";

  getAll = async () => {
    return $axios.get<IProduct[]>(this.url);
  };

  create = async (productId: string | number) => {
    return $axios.post<IProduct>(`${this.url}/${productId}`);
  };

  delete = async (productId: string | number) => {
    return $axios.delete(`${this.url}/${productId}`);
  };
}

export default new FavouritesService();
