import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper';
import AuthService from '@/services/auth/auth.service';
import axios from 'axios';
import { errorCatch, getContentType } from './api.helper';

export const $axios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: getContentType(),
});

$axios.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken();
  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

$axios.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    console.log(error);

    // Не авторизирован / что-то с jwt
    if (
      (error.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        await AuthService.getNewTokens();
        return $axios.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') {
          removeFromStorage();
        }
      }
    }

    throw error;
  }
);
