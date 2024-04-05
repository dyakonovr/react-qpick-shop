import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./orders.actions";
import type { Nullable } from "@/types/general/nullable.type";
import type { IOrder } from "@/types/features/order.types";
import { checkAuth } from "../user/user.actions";

interface IOrdersInitialState {
  data: Nullable<IOrder[]>;
  isLoading: boolean;
}

const initialState: IOrdersInitialState = {
  data: null,
  isLoading: false
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.orders;
      })

      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
      })

      .addCase(createOrder.fulfilled, (state, action) => {
        if (!state.data || state.data.length === 0) state.data = [action.payload];
        else state.data = [...state.data, action.payload];
      });
  }
});

export default ordersSlice.reducer;
