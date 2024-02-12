import Cookies from "js-cookie";
import { TokenNames } from "@/enum/TokenNames";
import { IAuthResponse } from "@/services/auth/user.types";

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
