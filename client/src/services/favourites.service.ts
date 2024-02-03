import { $axios } from '@/api/api.interceptor';
import { IProductIdResponse } from '@/store/slices/favourites/favourites.types';
import { Product } from '@/types/product.types';

class FavouritesService {
  private url = '/favourites';

  getAll = async () => {
    return $axios.get<Product[]>(this.url);
  };

  create = async (productId: string | number) => {
    return $axios.post<Product>(`${this.url}/${productId}`);
  };

  delete = async (productId: string | number) => {
    return $axios.delete<IProductIdResponse>(`${this.url}/${productId}`);
  };
}

export default new FavouritesService();
