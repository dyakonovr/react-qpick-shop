import { Roles } from "@/enum/Roles";
import { ILoginResponse } from "@/interfaces/ILoginResponse";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ILoginResponse = {
  token: "",
  role: Roles.USER
}
 
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ILoginResponse>) {
      localStorage.setItem("token", action.payload.token);

      state.token = action.payload.token;
      state.role = action.payload.role;
    },

    clearUser(state) {
      localStorage.removeItem("token");

      state.token = "";
      state.role = Roles.USER;
    },
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;