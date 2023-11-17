import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { IBasketProduct } from "@/interfaces/IBasketProduct";
import { updateBasketProduct } from "@/store/basket/BasketSlice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";

function changeBasketProductQuantity(basketProductId: number, quantity: number) {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<IBasketProduct> = await customAxios.patch(`${ServerPaths.BASKET_PRODUCT}/${basketProductId}`, {quantity});
      dispatch(updateBasketProduct(response.data));
    } catch (e) {
      toast({
        title: "Увеличение количества товара в корзине",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default changeBasketProductQuantity;