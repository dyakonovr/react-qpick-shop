import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { IBasketProduct } from "@/interfaces/IBasketProduct";
import { addBasketProduct } from "@/store/basket/BasketSlice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";

function createBasketProduct(productId: number, basketId: number) {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<IBasketProduct> = await customAxios.post(`${ServerPaths.BASKET_PRODUCT}`, {productId, basketId});
      dispatch(addBasketProduct(response.data));
    } catch (e) {
      toast({
        title: "Получение категории",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default createBasketProduct;