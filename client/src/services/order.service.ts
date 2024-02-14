import { $axios } from "@/api/api.interceptor";
import { IOrder } from "@/types/features/order.types";

class OrderService {
  private url = "/order";

  getAll = async () => {
    return $axios.get<IOrder[]>(this.url);
  };
}

export default new OrderService();
