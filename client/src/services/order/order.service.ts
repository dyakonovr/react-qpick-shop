import type { IOrderForCreating } from "./order-for-creating.type";
import type { IOrder } from "@/types/features/order.types";
import { $axios } from "@/api/api.interceptor";

class OrderService {
  private url = "/order";

  getAll = async () => {
    const response = await $axios.get<{ orders: IOrder[] }>(this.url);
    return response.data;
  };

  create = async (order: IOrderForCreating) => {
    const response = await $axios.post(this.url, order);
    return response.data;
  };
}

export default new OrderService();
