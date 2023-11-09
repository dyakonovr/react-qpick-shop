import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { IBasketProduct } from "@/interfaces/IBasketProduct";
import { setBasketProducts } from "@/store/basket/BasketSlice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";
  
function fetchBasketProducts(basketId: number | string) {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<IBasketProduct[]> = await customAxios.get(`${ServerPaths.BASKET_PRODUCT.GET_ALL}/${basketId}`);
      dispatch(setBasketProducts(response.data));
    } catch (e) {
      toast({
        title: "Получение товаров корзины",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}


export default fetchBasketProducts;