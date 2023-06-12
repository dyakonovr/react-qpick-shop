import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IFavouritesState from '@interfaces/store/IFavouritesState';

const initialState: IFavouritesState = {
  idList: [1, 2, 5, 9],
  quantity: 4,
}
 
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavouriteItem(state, action: PayloadAction<number>) {
      state.idList.push(action.payload);
      state.quantity++;
    },

    removeFavouriteItem(state, action: PayloadAction<number>) {
      state.idList = state.idList.filter((id: number) => id !== action.payload);
      state.quantity--;
    }
  }
});

export const { addFavouriteItem, removeFavouriteItem } = favouritesSlice.actions;
export default favouritesSlice.reducer;