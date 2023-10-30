import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/CartSlice';
import favouritesSlice from './favourites/FavouritesSlice';
import ordersSlice from './orders/ordersSlice';
import productsSlice from './products/ProductsSlice';
import categoriesSlice from "./categories/CategoriesSlice";
import userSlice from "./user/UserSlice";

const rootReducer = combineReducers({ productsSlice, favouritesSlice, cartSlice, ordersSlice, categoriesSlice, userSlice });
const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;