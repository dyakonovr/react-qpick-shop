import { Product } from '@/types/product.types';
import { createSlice } from '@reduxjs/toolkit';
import {
  addProductToFavourites,
  deleteProductFromFavourites,
  fetchFavourites,
} from './favourites.actions';

type IFavouritesInitialState = {
  data: Product[] | null;
  isLoading: boolean;
};

const initialState: IFavouritesInitialState = {
  data: null,
  isLoading: false,
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    clearFavourites(state) {
      state.data = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavourites.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchFavourites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(fetchFavourites.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
      })

      .addCase(addProductToFavourites.fulfilled, (state, action) => {
        if (!state.data || state.data.length === 0)
          state.data = [action.payload];
        else state.data = [...state.data, action.payload];
      })

      .addCase(deleteProductFromFavourites.fulfilled, (state, action) => {
        if (!state.data || state.data.length === 0) return;

        state.data = state.data.filter(
          (product) => product.id !== action.payload.productId
        );
      });
  },
});

export default favouritesSlice.reducer;
export const { clearFavourites } = favouritesSlice.actions;
