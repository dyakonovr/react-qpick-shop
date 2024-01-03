import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExtendedProduct } from '../../interfaces/product.interface';

interface IProductsState {
  products: IExtendedProduct[] | null;
}

const initialState: IProductsState = {
  products: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IExtendedProduct[]>) {
      if (state.products && state.products.length !== 0)
        state.products.push(...action.payload);
      else state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<IExtendedProduct>) {
      if (state.products !== null) state.products.push(action.payload);
      else state.products = [action.payload];
    },
  },
});

export const { setProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
