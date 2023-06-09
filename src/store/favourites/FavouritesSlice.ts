import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idList: [],
}
 
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    chatFetchingSuccess(state, action) {
      // state.data = action.payload;
    },
  }
});

export default favouritesSlice.reducer;