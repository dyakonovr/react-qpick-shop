import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import AuthService from "@/services/auth/auth.service";
import { removeFromStorage } from "@/services/auth/auth.helper";
import { errorCatch } from "@/api/api.helper";
import { AuthType } from "@/components/screens/Auth/auth.types";

// export const registration = createAsyncThunk<IAuthResponse, IEmailPassword>(
//   'auth/registration',
//   async (data, thunkApi) => {
//     try {
//       const response = await AuthService.main('registration', data);
//       return response;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

// export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
//   'auth/login',
//   async (data, thunkApi) => {
//     try {
//       const response = await AuthService.main('login', data);
//       return response;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

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

export const checkAuth = createAsyncThunk<IAuthResponse>(
  'auth/check-auth',
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (error) {
      if (errorCatch(error) === 'jwt expired') thunkApi.dispatch(logout())

      return thunkApi.rejectWithValue(error);
    }
  }
);