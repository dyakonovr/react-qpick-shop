import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { IProduct, IProductWithoutId } from "@/interfaces/IProduct";
import { addProduct } from "@/store/products/ProductsSlice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";

function createProduct(product: IProductWithoutId) {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<IProduct> = await customAxios.post(ServerPaths.PRODUCT, product);
      dispatch(addProduct(response.data));
      toast({
        title: "Создание товара",
        description: `Успешно!`,
      });
    } catch (e) {
      toast({
        title: "Создание товара",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default createProduct;