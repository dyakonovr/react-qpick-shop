import { createAsyncThunk } from "@reduxjs/toolkit";
import FavouritesService from "@/services/favourites.service";
import { IProduct } from "@/types/product/product.types";

export const fetchFavourites = createAsyncThunk<IProduct[]>(
  "favourites/get-all",
  async (_, thunkApi) => {
    try {
      const response = await FavouritesService.getAll();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addProductToFavourites = createAsyncThunk<IProduct, number>(
  "favourites/create",
  async (productId, thunkApi) => {
    try {
      const response = await FavouritesService.create(productId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProductFromFavourites = createAsyncThunk<number, number>(
  "favourites/delete",
  async (productId, thunkApi) => {
    try {
      await FavouritesService.delete(productId);
      return productId;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
