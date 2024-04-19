import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUpdateBasketItemData } from "@/services/basket-item/basket-item.types";
import type { RootType } from "@/store/store";
import type { IBasketItem } from "@/types/features/basket-item.types";
import BasketItemService from "@/services/basket-item/basket-item.service";
import { showErrorToast } from "@/store/show-error-toast.helper";

export const addProductToBasket = createAsyncThunk<IBasketItem, number>(
  "basket/add-product",
  async (productId, thunkApi) => {
    try {
      const basketId = (thunkApi.getState() as RootType).basket.id;
      if (!basketId) {
        const error = new Error("Попробуйте обновить страницу");
        showErrorToast(error, "Ошибка добавления товара в корзину");
        return thunkApi.rejectWithValue("Непредвиденная ошибка");
      }

      const response = await BasketItemService.create(productId, basketId);
      return response;
    } catch (error) {
      showErrorToast(error as Error, "Ошибка добавления товара в корзину");
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProductFromBasket = createAsyncThunk<number, number>(
  "basket/delete-product",
  async (basketItemId, thunkApi) => {
    try {
      if (!confirm("Вы точно хотите удалить товар из корзины?")) {
        return thunkApi.rejectWithValue("rejected");
      }

      await BasketItemService.delete(basketItemId);
      return basketItemId;
    } catch (error) {
      showErrorToast(error as Error, "Ошибка удаления товара из корзины");
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
    showErrorToast(error as Error, "Ошибка обновления количества товара в корзине");
    return thunkApi.rejectWithValue(error);
  }
});
