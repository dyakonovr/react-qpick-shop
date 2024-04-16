import { createSlice } from "@reduxjs/toolkit";
import { auth, checkAuth } from "../user/user.actions";
import {
  addProductToFavourites,
  deleteProductFromFavourites
} from "./favourites.actions";
import type { IProduct } from "@/types/features/product/product.types";
import type { Nullable } from "@/types/general/nullable.type";

interface IFavouritesInitialState {
  data: Nullable<IProduct[]>;
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
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.favourites;
      })

      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
      })

      .addCase(auth.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(auth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.favourites;
      })

      .addCase(auth.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
      })

      .addCase(addProductToFavourites.fulfilled, (state, action) => {
        if (!state.data || state.data.length === 0) state.data = [action.payload];
        else state.data = [...state.data, action.payload];
      })

      .addCase(deleteProductFromFavourites.fulfilled, (state, action) => {
        if (!state.data || state.data.length === 0) return;

        state.data = state.data.filter((product) => product.id !== action.payload);
      });
  }
});

export default favouritesSlice.reducer;
export const { clearFavourites } = favouritesSlice.actions;
