import { ICategory } from "@/interfaces/ICategory";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICategoriesState {
  categories: ICategory[]
}

const initialState: ICategoriesState = {
  categories: []
}
 
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<ICategory[]>) {
      state.categories = action.payload;
    },
  }
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
