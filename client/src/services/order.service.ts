import type { IOrder } from "@/types/features/order.types";
import { $axios } from "@/api/api.interceptor";

class OrderService {
  private url = "/order";

  getAll = async () => {
    return $axios.get<IOrder[]>(this.url);
  };
}

export default new OrderService();
