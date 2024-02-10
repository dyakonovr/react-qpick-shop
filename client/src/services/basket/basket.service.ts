import { $axios } from '@/api/api.interceptor';
import { IBasketResponse } from "./basket.types";

class BasketService {
  private url = '/basket';

  getById = async () => {
    return await $axios.get<IBasketResponse>(this.url);
  };
}

export default new BasketService();
