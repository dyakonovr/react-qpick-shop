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
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    }
  }
});

export const { setProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;