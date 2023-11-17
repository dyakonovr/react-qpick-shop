import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { deleteBasketProduct } from "@/store/basket/BasketSlice";
import { AppDispatch } from "@/store/store";

function deleteBasketProductRequest(basketProductId: number) {
  return async function (dispatch: AppDispatch) {
    try {
      await customAxios.delete(`${ServerPaths.BASKET_PRODUCT}/${basketProductId}`);
      dispatch(deleteBasketProduct(basketProductId));
    } catch (e) {
      toast({
        title: "Увеличение количества товара в корзине",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default deleteBasketProductRequest;