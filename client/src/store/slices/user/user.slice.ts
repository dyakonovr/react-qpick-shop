import { createSlice } from "@reduxjs/toolkit";
import { auth, checkAuth, logout } from "./user.actions";
import { IUser } from "@/types/user.types";

type Status = "unauthorized" | "loading" | "success" | "error";

interface IInitialState {
  data: IUser | null;
  status: Status | null;
}

const initialState: IInitialState = {
  data: null,
  status: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.status = "loading";
      })

      .addCase(auth.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.user;
      })

      .addCase(auth.rejected, (state) => {
        state.status = "error";
        state.data = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.status = "unauthorized";
        state.data = null;
      })

      .addCase(checkAuth.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.user;
      })

      .addCase(checkAuth.rejected, (state) => {
        state.status = "unauthorized";
        state.data = null;
      });
  }
});

export default userSlice.reducer;
