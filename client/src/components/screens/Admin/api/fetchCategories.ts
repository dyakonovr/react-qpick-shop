import customAxios from '@/axios';
import { toast } from '@/components/ui/use-toast';
import { ServerPaths } from '@/enum/ServerPaths';
import { setCategories } from '@/store/slices/category.slice';
import { AppDispatch } from '@/store/store';
import { ICategory } from '@/types/category.types';
import { AxiosResponse } from 'axios';

function fetchCategories() {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<ICategory[]> = await customAxios.get(
        ServerPaths.CATEGORY
      );
      dispatch(setCategories(response.data));
    } catch (e) {
      toast({
        title: 'Получение категорий товаров',
        description: `Произошла ошибка: ${e}`,
      });
    }
  };
}

export default fetchCategories;
