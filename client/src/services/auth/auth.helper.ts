import { TokenNames } from "@/enum/TokenNames";
import { IAuthResponse } from '@/store/slices/user/user.interface';
import Cookies from 'js-cookie';

export const checkAccessToken = () => {
  return !!Cookies.get(TokenNames.ACCESS_TOKEN);
};

export const getAccessToken = () => {
  const accessToken = Cookies.get(TokenNames.ACCESS_TOKEN);
  return accessToken || null;
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};

export const removeFromStorage = () => {
  Cookies.remove(TokenNames.ACCESS_TOKEN);
  Cookies.remove(TokenNames.REFRESH_TOKEN);
  localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
  Cookies.set(TokenNames.ACCESS_TOKEN, data.accessToken);
  Cookies.set(TokenNames.REFRESH_TOKEN, data.refreshToken);
  localStorage.setItem('user', JSON.stringify(data.user));
};