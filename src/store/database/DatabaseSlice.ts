import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { templateDatabase } from './templateDatabase';
import IDatabaseState from '@interfaces/store/IDatabaseState';

const initialState: IDatabaseState = {
  data: templateDatabase,
  promoCodes: { "promocode 1": "124", "15 percent": "15%", "4624267": "2%"}
}
 
const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {
    chatFetchingSuccess(state, action: PayloadAction<number>) { // <number> = тип, к-ый приходит из action
      state.data = action.payload;
    },
  }
});

export default databaseSlice.reducer;
