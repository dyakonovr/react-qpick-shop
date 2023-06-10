import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IFavouritesState from '@interfaces/store/IFavouritesState';

const initialState: IFavouritesState = {
  idList: [1, 2, 5, 9],
}
 
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavouriteItem(state, action: PayloadAction<number>) {
      state.idList.push(action.payload);
    },

    removeFavouriteItem(state, action: PayloadAction<number>) {
      const productIndex = state.idList.indexOf(action.payload);
      state.idList = state.idList.filter((id: number) => id !== productIndex);
    }
  }
});

export const { addFavouriteItem, removeFavouriteItem } = favouritesSlice.actions;
export default favouritesSlice.reducer;