import { $axios } from '@/api/api.interceptor';
import { IExtendedProduct } from '@/types/product.types';
import { IUser } from '@/types/user.types';

class UserService {
  private url = '/user/profile';

  getProfile = async (id: number | string) => {
    return $axios.get<IUser>(`${this.url}/${id}`);
  };

  toggleFavourite = async (productId: string | number) => {
    return $axios.patch<IExtendedProduct>(
      `${this.url}/favourites/${productId}`
    );
  };
}

export default new UserService();
