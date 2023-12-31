import { $axios } from '@/api/api.interceptor';
import { IProduct } from "@/interfaces/product.interface";
import { IFullUser } from "@/interfaces/user.interface";

class UserService {
  private url = "/user/profile"; 

  getProfile = async (id: number | string) => {
    console.log("getProfile run");
    return $axios.get<IFullUser>(`${this.url}/${id}`);
  }

  toggleFavourite = async (productId: string | number) => {
    return $axios.patch<IProduct>(`${this.url}/favourites/${productId}`);
  }
}

export default new UserService();