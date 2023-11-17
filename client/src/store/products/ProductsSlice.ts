import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';

interface IProductsState {
  products: IProduct[] | null,
}

const initialState: IProductsState = {
  products: null,
}
 
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      if (state.products !== null) state.products.push(action.payload);
      else state.products = [action.payload];
    }
  }
});

export const { setProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;