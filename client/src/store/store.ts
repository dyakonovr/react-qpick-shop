import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basketSlice from './basket/BasketSlice';
import categoriesSlice from "./categories/CategoriesSlice";
import favouritesSlice from './favourites/FavouritesSlice';
import ordersSlice from './orders/ordersSlice';
import productsSlice from './products/ProductsSlice';
import userSlice from "./user/UserSlice";

const rootReducer = combineReducers({ productsSlice, favouritesSlice, basketSlice, ordersSlice, categoriesSlice, userSlice });
const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;