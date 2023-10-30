import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';

interface IProductsState {
  products: IProduct[],
}

const initialState: IProductsState = {
  products: [],
}
 
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  }
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;