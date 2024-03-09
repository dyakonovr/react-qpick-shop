import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearBasket } from "../basket/basket.slice";
import type { IOrder } from "@/types/features/order.types";
import type { IOrderForCreating } from "@/services/order/order-for-creating.type";
import { showErrorToast } from "@/store/show-error-toast.helper";
import OrderService from "@/services/order/order.service";

export const fetchOrders = createAsyncThunk<IOrder[]>(
  "orders/get-all",
  async (_, thunkApi) => {
    try {
      const response = await OrderService.getAll();
      return response.orders;
    } catch (error) {
      showErrorToast(error as Error, "Ошибка получения заказов");
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createOrder = createAsyncThunk<IOrder, IOrderForCreating>(
  "orders/create",
  async (orderForCreating, thunkApi) => {
    try {
      const response = await OrderService.create(orderForCreating);
      thunkApi.dispatch(clearBasket());
      return response;
    } catch (error) {
      showErrorToast(error as Error, "Ошибка создания заказа");
      return thunkApi.rejectWithValue(error);
    }
  }
);
