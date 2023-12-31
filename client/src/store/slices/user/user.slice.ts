import { getValueFromLocalStorage } from "@/functions/getValueFromLocalStorage";
import { createSlice } from '@reduxjs/toolkit';
import { checkAuth, auth, logout } from "./user.actions";
import { IInitialState } from "./user.interface";

const initialState: IInitialState = {
  user: getValueFromLocalStorage('user'),
  isLoading: false
}
 
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(auth.pending, (state) => {
      state.isLoading = true;
    })
    
    .addCase(auth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
    })
      
    .addCase(auth.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
    })

    .addCase(logout.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
    })

    .addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload.user;
    })
  }
});

export default userSlice.reducer;