import { Roles } from "@/enum/Roles";
import { ILoginResponse } from "@/interfaces/ILoginResponse";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserSlice {
  token: string | null,
  id: number | null,
  role: Roles | null
}

const initialState: IUserSlice = {
  token: null,
  id: null,
  role: null
}
 
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ILoginResponse>) {
      localStorage.setItem("token", action.payload.token);

      state.token = action.payload.token;
      state.id = action.payload.id;
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