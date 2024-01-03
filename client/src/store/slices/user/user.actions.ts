import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import AuthService from "@/services/auth/auth.service";
import { removeFromStorage } from "@/services/auth/auth.helper";
import { errorCatch } from "@/api/api.helper";
import { AuthType } from "@/components/screens/Auth/auth.types";
import { RootType } from "@/store/store";

export const auth = createAsyncThunk<IAuthResponse, { type: AuthType; data: IEmailPassword }>(
  `auth`,
  async ({ type, data }, thunkApi) => {
    try {
      const response = await AuthService.main(type, data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


export const logout = createAsyncThunk(
  'auth/logout',
  async () => removeFromStorage()
);

export const checkAuth = createAsyncThunk<IAuthResponse, void, { state: RootType }>(
  'auth/check-auth',
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (error) {
      if (errorCatch(error) === 'jwt expired') thunkApi.dispatch(logout());

      return thunkApi.rejectWithValue(error);
    }
  }
);