import FavouritesService from '@/services/favourites.service';
import { Product } from '@/types/product.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProductIdResponse } from './favourites.types';

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

export const deleteProductFromFavourites = createAsyncThunk<
  IProductIdResponse,
  number
>('favourites/delete', async (productId, thunkApi) => {
  try {
    const response = await FavouritesService.delete(productId);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
