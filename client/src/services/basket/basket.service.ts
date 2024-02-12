import { IBasketResponse } from "./basket.types";
import { $axios } from "@/api/api.interceptor";

class BasketService {
  private url = "/basket";

  getById = async () => {
    return await $axios.get<IBasketResponse>(this.url);
  };
}

export default new BasketService();
