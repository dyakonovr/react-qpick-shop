import Cookies from "js-cookie";
import { saveToStorage } from "./auth.helper";
import type { AuthType } from "@/components/screens/Auth/auth.types";
import type { IAuthResponse, IEmailPassword } from "@/services/auth/user.types";
import { getContentType } from "@/api/api.helper";
import { $axios } from "@/api/api.interceptor";
import { TokenNames } from "@/enum/TokenNames";

class AuthSerice {
  private url = "auth";

  main = async (type: AuthType, data: IEmailPassword) => {
    const response = await $axios.post<IAuthResponse>(`/${this.url}/${type}`, data);

    if (response.data.accessToken) saveToStorage(response.data);
    return response.data;
  };

  getNewTokens = async () => {
    const refreshToken = Cookies.get(TokenNames.REFRESH_TOKEN);
    const response = await $axios.get<IAuthResponse>(`${this.url}/login/access-token`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        ...getContentType()
      }
    });

    if (response.data.accessToken) saveToStorage(response.data);
    return response.data;
  };
}

export default new AuthSerice();
