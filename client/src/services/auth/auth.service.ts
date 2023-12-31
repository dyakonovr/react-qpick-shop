import { getContentType } from "@/api/api.helper";
import { $axios } from '@/api/api.interceptor';
import { AuthType } from "@/components/screens/Auth/auth.types";
import { IAuthResponse, IEmailPassword } from "@/store/slices/user/user.interface";
import axios from "axios";
import Cookies from "js-cookie";
import { saveToStorage } from "./auth.helper";

class AuthSerice {
  private url = "auth";

  main = async (type: AuthType, data: IEmailPassword) => {
    const response = await $axios.post<IAuthResponse>(`/${this.url}/${type}`, data);

    if (response.data.accessToken) saveToStorage(response.data);
    return response.data;
  }

  getNewTokens = async () => {
    const refreshToken = Cookies.get('refreshToken');

    const response = await axios.post<string, { data: IAuthResponse }>(
      import.meta.env.SERVER_URL + this.url + '/login/access-token',
      { refreshToken },
      { headers: getContentType() }
    );

    if (response.data.accessToken) saveToStorage(response.data);
    return response;
  }
}

export default new AuthSerice();