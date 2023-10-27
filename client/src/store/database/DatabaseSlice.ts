import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from './../../interfaces/IProduct';

interface IProductsState {
  products: IProduct[]
}

const initialState: IProductsState = {
  products: [],
}
 
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
