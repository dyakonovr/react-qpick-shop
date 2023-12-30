import { $axios } from '@/api/api.interceptor';
import { IOrder } from "@/interfaces/order.interface";

class OrderService {
  private url = "/order"; 

  getAll = async () => {
    return $axios.get<IOrder[]>(`${this.url}`);
  }
}

export default new OrderService();