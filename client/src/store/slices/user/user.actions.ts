import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearBasket } from "../basket/basket.slice";
import { clearFavourites } from "../favourites/favourites.slice";
import type { IAuthResponse, IEmailPassword } from "../../../services/auth/user.types";
import type { AuthType } from "@/components/screens/Auth/auth.types";
import { errorCatch } from "@/api/api.helper";
import AuthService from "@/services/auth/auth.service";
import { showErrorToast } from "@/store/show-error-toast.helper";

export const auth = createAsyncThunk<
  IAuthResponse,
  { type: AuthType; data: IEmailPassword }
>(`auth`, async ({ type, data }, thunkApi) => {
  try {
    const response = await AuthService.main(type, data);
    return response;
  } catch (error) {
    showErrorToast(error as Error, "Ошибка авторизации/регистрации");
    return thunkApi.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  thunkApi.dispatch(clearBasket());
  thunkApi.dispatch(clearFavourites());
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
  "auth/check-auth",
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens();
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        // 403 === bad accessToken
        return thunkApi.rejectWithValue(error);
      }
      if (errorCatch(error) === "jwt expired") thunkApi.dispatch(logout());

      showErrorToast(error as Error, "Ошибка авторизации");
      return thunkApi.rejectWithValue(error);
    }
  }
);
