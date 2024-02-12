import { createAsyncThunk } from "@reduxjs/toolkit";
import BasketItemService from "@/services/basket-item/basket-item.service";
import { IUpdateBasketItemData } from "@/services/basket-item/basket-item.types";
import BasketService from "@/services/basket/basket.service";
import { IBasketResponse } from "@/services/basket/basket.types";
import { RootType } from "@/store/store";
import { IBasketItem } from "@/types/basket-item.types";

export const fetchBasketAndItems = createAsyncThunk<IBasketResponse>(
  "basket/get-all",
  async (_, thunkApi) => {
    try {
      const response = await BasketService.getById();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addProductToBasket = createAsyncThunk<IBasketItem, number>(
  "basket/add-product",
  async (productId, thunkApi) => {
    try {
      const basketId = (thunkApi.getState() as RootType).basket.id;
      if (!basketId) {
        return thunkApi.rejectWithValue(
          new Error("Ошибка добавление товара в корзину")
        );
      }

      const response = await BasketItemService.create(productId, basketId);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProductFromBasket = createAsyncThunk<number, number>(
  "basket/delete-product",
  async (basketItemId, thunkApi) => {
    try {
      await BasketItemService.delete(basketItemId);
      return basketItemId;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateBasketItemQuantity = createAsyncThunk<
  IUpdateBasketItemData,
  IUpdateBasketItemData
>("basket/update-product-quantity", async (updateData, thunkApi) => {
  try {
    await BasketItemService.update(updateData);
    return updateData;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
