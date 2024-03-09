import { createSlice } from "@reduxjs/toolkit";
import { createOrder, fetchOrders } from "./orders.actions";
import type { Nullable } from "@/types/general/nullable.type";
import type { IOrder } from "@/types/features/order.types";

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
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(fetchOrders.rejected, (state) => {
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
