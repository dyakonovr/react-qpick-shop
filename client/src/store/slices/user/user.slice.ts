import { getValueFromLocalStorage } from '@/functions/getValueFromLocalStorage';
import { createSlice } from '@reduxjs/toolkit';
import { auth, checkAuth, logout } from './user.actions';
import { IUser } from "@/types/user.types";

type Status = 'loading' | 'success' | 'error';
 
interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: IInitialState = {
  user: null, // getValueFromLocalStorage('user')
  isLoading: false,
  errorMessage: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(auth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })

      .addCase(auth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        // state.errorMessage =
      })

      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })

      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});

export default userSlice.reducer;
