import { ICategory } from "@/interfaces/category.interface";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICategoriesState {
  categories: ICategory[] | null
}

const initialState: ICategoriesState = {
  categories: null
}
 
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<ICategory[]>) {
      state.categories = action.payload;
    },
    addCategory(state, action: PayloadAction<ICategory>) {
      if (state.categories !== null) state.categories.push(action.payload);
      else state.categories = [action.payload];
    }
  }
});

export const { setCategories, addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
