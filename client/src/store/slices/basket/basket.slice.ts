import { IBasketItem } from '@/types/basket-item.types';
import { createSlice } from '@reduxjs/toolkit';
import {
  addProductToBasket,
  deleteProductFromBasket,
  fetchBasketAndItems,
  updateBasketItemQuantity,
} from './basket.actions';

interface IBasketInitialState {
  id: number | null;
  items: IBasketItem[] | null;
  isLoading: boolean;
};

const initialState: IBasketInitialState = {
  id: null,
  items: null,
  isLoading: false,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    clearBasket(state) {
      state.id = null;
      state.isLoading = false;
      state.items = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasketAndItems.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchBasketAndItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.id = action.payload.id;
        state.items = action.payload.products;
      })

      .addCase(fetchBasketAndItems.rejected, (state) => {
        state.isLoading = false;
        state.items = null;
        state.id = null;
      })

      .addCase(addProductToBasket.fulfilled, (state, action) => {
        if (!state.items || state.items.length === 0)
          state.items = [action.payload];
        else state.items = [...state.items, action.payload];
      })

      .addCase(deleteProductFromBasket.fulfilled, (state, action) => {
        if (!state.items || state.items.length === 0) return;

        state.items = state.items.filter(
          (basketItem) => basketItem.id !== action.payload
        );
      })

      .addCase(updateBasketItemQuantity.fulfilled, (state, action) => {
        if (!state.items || state.items.length === 0) return;

        state.items = state.items.map((basketItem) => {
          if (basketItem.id !== action.payload.basketItemId) return basketItem;
          return { ...basketItem, quantity: action.payload.quantity };
        });
      });
  },
});

export default basketSlice.reducer;
export const { clearBasket } = basketSlice.actions;
