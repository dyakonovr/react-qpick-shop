import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IProduct } from "@/types/features/product/product.types";
import FavouritesService from "@/services/favourites.service";
import { showErrorToast } from "@/store/show-error-toast.helper";

export const addProductToFavourites = createAsyncThunk<IProduct, number>(
  "favourites/create",
  async (productId, thunkApi) => {
    try {
      const response = await FavouritesService.create(productId);
      return response;
    } catch (error) {
      showErrorToast(error as Error, "Ошибка добавления товара в избранные");
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
      showErrorToast(error as Error, "Ошибка удаления товара из избранных");
      return thunkApi.rejectWithValue(error);
    }
  }
);
