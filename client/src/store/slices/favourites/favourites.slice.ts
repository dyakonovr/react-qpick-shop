import { createSlice } from "@reduxjs/toolkit";
import {
  addProductToFavourites,
  deleteProductFromFavourites,
  fetchFavourites
} from "./favourites.actions";
import { IProduct } from "@/types/product/product.types";

interface IFavouritesInitialState {
  data: IProduct[] | null;
  isLoading: boolean;
}

const initialState: IFavouritesInitialState = {
  data: null,
  isLoading: false
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    clearFavourites(state) {
      state.data = null;
      state.isLoading = false;
    }
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
          (product) => product.id !== action.payload
        );
      });
  }
});

export default favouritesSlice.reducer;
export const { clearFavourites } = favouritesSlice.actions;
