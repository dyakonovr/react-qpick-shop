import { combineReducers, configureStore } from '@reduxjs/toolkit';
import databaseSlice from './database/DatabaseSlice';
import favouritesSlice from './favourites/FavouritesSlice';

const rootReducer = combineReducers({ databaseSlice });
const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;