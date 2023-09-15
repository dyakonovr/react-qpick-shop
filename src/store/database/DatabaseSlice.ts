import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IDatabaseState from 'interfaces/store/database/IDatabaseState';
import { templateDatabase } from './templateDatabase';

const initialState: IDatabaseState = {
  data: templateDatabase,
  promoCodes: { "promocode 1": 124, "15 percent": "15%", "4624267": "2%"}
}
 
const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {}
});

export default databaseSlice.reducer;
