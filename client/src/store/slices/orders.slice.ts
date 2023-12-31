import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IOrder from 'interfaces/store/orders/IOrder';
import IOrderState from 'interfaces/store/orders/IOrderState';

const initialState: IOrderState = {
  list: [],
  lastOrderId: 0,
}
 
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addNewOrder(state, action: PayloadAction<IOrder>) {
      state.list.push(action.payload);
      state.lastOrderId += 1;

      console.log("New order:", action.payload);
    },
  }
});

export const { addNewOrder } = ordersSlice.actions;
export default ordersSlice.reducer;