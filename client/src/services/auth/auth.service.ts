import { getContentType } from '@/api/api.helper';
import { $axios } from '@/api/api.interceptor';
import { AuthType } from '@/components/screens/Auth/auth.types';
import { IAuthResponse, IEmailPassword } from '@/services/auth/user.types';
import axios from 'axios';
import Cookies from 'js-cookie';
import { saveToStorage } from './auth.helper';

class AuthSerice {
  private url = 'auth';

  main = async (type: AuthType, data: IEmailPassword) => {
    const response = await $axios.post<IAuthResponse>(
      `/${this.url}/${type}`,
      data
    );

    if (response.data.accessToken) saveToStorage(response.data);
    return response.data;
  };

  getNewTokens = async () => {
    const refreshToken = Cookies.get('refreshToken');

    // axios, а не $axios потому, что accessToken может закончится
    const response = await axios.get<IAuthResponse>(
      import.meta.env.VITE_SERVER_URL + this.url + '/login/access-token',
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          ...getContentType(),
        },
      }
    );

    if (response.data.accessToken) saveToStorage(response.data);
    return response.data;
  };
}

export default new AuthSerice();
