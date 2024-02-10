import FavouritesService from '@/services/favourites.service';
import { Product } from '@/types/product/product.types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavourites = createAsyncThunk<Product[]>(
  'favourites/get-all',
  async (_, thunkApi) => {
    try {
      const response = await FavouritesService.getAll();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addProductToFavourites = createAsyncThunk<Product, number>(
  'favourites/create',
  async (productId, thunkApi) => {
    try {
      const response = await FavouritesService.create(productId);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProductFromFavourites = createAsyncThunk<number, number>(
  'favourites/delete',
  async (productId, thunkApi) => {
    try {
      await FavouritesService.delete(productId);
      return productId;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
