import { createSlice } from "@reduxjs/toolkit";
import { checkAuth } from "../user/user.actions";
import {
  addProductToBasket,
  deleteProductFromBasket,
  updateBasketItemQuantity
} from "./basket.actions";
import type { IBasketItem } from "@/types/features/basket-item.types";
import type { Nullable } from "@/types/general/nullable.type";

interface IBasketInitialState {
  id: Nullable<number>;
  items: Nullable<IBasketItem[]>;
  isLoading: boolean;
}

const initialState: IBasketInitialState = {
  id: null,
  items: null,
  isLoading: false
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    clearBasket(state) {
      state.id = null;
      state.isLoading = false;
      state.items = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.id = action.payload.basket.id;
        state.items = action.payload.basket.products;
      })

      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.items = null;
        state.id = null;
      })

      .addCase(addProductToBasket.fulfilled, (state, action) => {
        if (!state.items || state.items.length === 0) state.items = [action.payload];
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
  }
});

export default basketSlice.reducer;
export const { clearBasket } = basketSlice.actions;
