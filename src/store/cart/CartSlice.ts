import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ICartState from '@interfaces/store/ICartState';

const initialState: ICartState = {
  products: [],
  quantity: 0,
}
 
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<number>) {
      // state.idList.push(action.payload);
      state.quantity++;
    },

    removeItemFromCart(state, action: PayloadAction<number>) {
      // state.idList = state.idList.filter((id: number) => id !== action.payload);
      state.quantity--;
    }
  }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;