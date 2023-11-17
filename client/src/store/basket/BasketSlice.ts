import { IBasketProduct } from "@/interfaces/IBasketProduct";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasketSlice {
  id: number | null,
  products: IBasketProduct[] | null,
}

const initialState: IBasketSlice = {
  id: null,
  products: null
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
    addBasketProduct(state, action: PayloadAction<IBasketProduct>) {
      if (state.products) state.products.push(action.payload);
      else state.products = [action.payload];
    },
    deleteBasketProduct(state, action: PayloadAction<number>) {
      if (!state.products) return;
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateBasketProduct(state, action: PayloadAction<IBasketProduct>) {
      if (!state.products) return;
      state.products  = state.products.map(basketProduct => {
        if (basketProduct.id === action.payload.id) return action.payload;
        return basketProduct;
      });
    },
  }
});

export const { setBasket, setBasketProducts, addBasketProduct, deleteBasketProduct, updateBasketProduct } = basketSlice.actions;
export default basketSlice.reducer;