import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { IProduct } from "@/interfaces/IProduct";
import { addProduct } from "@/store/products/ProductsSlice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";

function fetchProduct(id: number | string) {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<IProduct> = await customAxios.get(`${ServerPaths.PRODUCT}/${id}`);
      dispatch(addProduct(response.data));
    } catch (e) {
      toast({
        title: "Получение товара",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default fetchProduct;