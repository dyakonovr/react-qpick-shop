import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/CartSlice';
import productsSlice from './database/DatabaseSlice';
import favouritesSlice from './favourites/FavouritesSlice';
import ordersSlice from './orders/ordersSlice';

const rootReducer = combineReducers({ productsSlice, favouritesSlice, cartSlice, ordersSlice });
const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;