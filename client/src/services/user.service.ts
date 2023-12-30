import { $axios } from '@/api/api.interceptor';
import { ICategory } from "@/interfaces/category.interface";
import { IUser } from "@/interfaces/user.interface";

class UserService {
  private url = "/user/profile"; 

  getProfile = async () => {
    return $axios.get<IUser>(`${this.url}`);
  }

  toggleFavourite = async (productId: string | number) => {
    return $axios.patch<ICategory>(`${this.url}/favourites/${productId}`);
  }
}

export default new UserService();