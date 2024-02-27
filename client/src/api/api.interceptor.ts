import axios from "axios";
import { errorCatch, getContentType } from "./api.helper";
import { getAccessToken, removeFromStorage } from "@/services/auth/auth.helper";
import AuthService from "@/services/auth/auth.service";

export const $axios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: getContentType()
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

    if (
      error.response?.status === 401 &&
      (errorCatch(error).includes("jwt expired") ||
        errorCatch(error).includes("jwt must be provided")) &&
      error.config &&
      !error.config._isRetry
    ) {
      // Не авторизирован / что-то с jwt
      originalRequest._isRetry = true;

      try {
        await AuthService.getNewTokens();
        return $axios.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") {
          removeFromStorage();
        }
      }
    }

    throw error;
  }
);
