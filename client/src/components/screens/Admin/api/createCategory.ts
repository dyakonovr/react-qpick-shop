import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { ICategory } from "@/interfaces/category.interface";
import { addCategory } from "@/store/slices/category.slice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";

function createCategory(name: string) {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<ICategory> = await customAxios.post(ServerPaths.CATEGORY, { name });
      dispatch(addCategory(response.data));
      toast({
        title: "Создание категории",
        description: `Успешно!`,
      });
    } catch (e) {
      toast({
        title: "Создание категории",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default createCategory;