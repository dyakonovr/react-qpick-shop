import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { IBasket } from "@/interfaces/IBasket";
import { setBasket } from "@/store/basket/BasketSlice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";

function fetchBasket(userId: number | string) {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<IBasket> = await customAxios.get(`${ServerPaths.BASKET.GET_ONE}/${userId}`);
      if (response.data.userId !== userId) throw new Error("неккоректная работа сервера. Повторите попытку");
      dispatch(setBasket(response.data.id));
    } catch (e) {
      toast({
        title: "Автоматическая авторизация пользователя",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default fetchBasket;