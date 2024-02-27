import type { IBasketResponse } from "./basket.types";
import { $axios } from "@/api/api.interceptor";

class BasketService {
  private url = "/basket";

  getById = async () => {
    const response = await $axios.get<IBasketResponse>(this.url);
    return response.data;
  };
}

export default new BasketService();
