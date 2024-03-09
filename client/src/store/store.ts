import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesSlice from "./slices/favourites/favourites.slice";
import userSlice from "./slices/user/user.slice";
import basketSlice from "./slices/basket/basket.slice";
import ordersSlice from "./slices/orders/orders.slice";

const rootReducer = combineReducers({
  orders: ordersSlice,
  basket: basketSlice,
  user: userSlice,
  favourites: favouritesSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  }
});

export type RootType = ReturnType<typeof rootReducer>;
