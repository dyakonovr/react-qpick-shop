import Cookies from "js-cookie";
import type { IAuthResponse } from "@/services/auth/user.types";
import { TokenNames } from "@/enum/TokenNames";

export const checkAccessToken = () => {
  return !!Cookies.get(TokenNames.ACCESS_TOKEN);
};

export const getAccessToken = () => {
  const accessToken = Cookies.get(TokenNames.ACCESS_TOKEN);
  return accessToken || null;
};

export const removeFromStorage = () => {
  Cookies.remove(TokenNames.ACCESS_TOKEN);
  Cookies.remove(TokenNames.REFRESH_TOKEN);
};

export const saveToStorage = (data: IAuthResponse) => {
  Cookies.set(TokenNames.ACCESS_TOKEN, data.accessToken);
  Cookies.set(TokenNames.REFRESH_TOKEN, data.refreshToken);
};
