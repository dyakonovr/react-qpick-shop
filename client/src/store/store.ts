import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import basketSlice from './slices/basket/basket.slice';
import categoriesSlice from "./slices/category.slice";
import ordersSlice from './slices/orders.slice';
import productsSlice from './slices/products.slice';
import userSlice from "./slices/user/user.slice";

const persistConfig = {
  key: 'qpick-shop',
  storage,
  whitelist: ['basket']
}

const rootReducer = combineReducers({
  products: productsSlice,
  basket: basketSlice,
  orders: ordersSlice,
  categories: categoriesSlice,
  user: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
      }
    })
  }
});


export const persistor = persistStore(store);

export type RootType = ReturnType<typeof rootReducer>;