import { IBasketProduct } from "@/interfaces/IBasketProduct";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasketSlice {
  id: number | null,
  products: IBasketProduct[],
}

const initialState: IBasketSlice = {
  id: null,
  products: []
};
 
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    setBasketProducts(state, action: PayloadAction<IBasketProduct[]>) {
      state.products = action.payload;
    },
  }
});

export const { setBasket, setBasketProducts } = basketSlice.actions;
export default basketSlice.reducer;