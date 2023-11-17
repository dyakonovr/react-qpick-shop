import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { ICategory } from "@/interfaces/ICategory";
import { addCategory } from "@/store/categories/CategoriesSlice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";

function fetchCategory(id: number | string) {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<ICategory> = await customAxios.get(`${ServerPaths.CATEGORY}/${id}`);
      dispatch(addCategory(response.data));
    } catch (e) {
      toast({
        title: "Получение категории",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default fetchCategory;