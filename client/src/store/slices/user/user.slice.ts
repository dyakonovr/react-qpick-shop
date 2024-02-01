import { getValueFromLocalStorage } from '@/functions/getValueFromLocalStorage';
import { createSlice } from '@reduxjs/toolkit';
import { auth, checkAuth, logout } from './user.actions';
import { IInitialState } from './user.interface';

type Status = 'loading' | 'success' | 'error';

const initialState: IInitialState = {
  user: getValueFromLocalStorage('user'),
  isLoading: false,
  errorMessage: null
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
