import customAxios from "@/axios";
import { toast } from "@/components/ui/use-toast";
import { ServerPaths } from "@/enum/ServerPaths";
import { IProduct } from "@/interfaces/IProduct";
import { setProducts } from "@/store/products/ProductsSlice";
import { AppDispatch } from "@/store/store";
import { AxiosResponse } from "axios";

function fetchProducts() {
  return async function (dispatch: AppDispatch) {
    try {
      const response: AxiosResponse<IProduct[]> = await customAxios.get(ServerPaths.PRODUCT.GET_ALL);
      dispatch(setProducts(response.data));
    } catch (e) {
      toast({
        title: "Получение товаров",
        description: `Произошла ошибка: ${e}`,
      });
    }
  }
}

export default fetchProducts;