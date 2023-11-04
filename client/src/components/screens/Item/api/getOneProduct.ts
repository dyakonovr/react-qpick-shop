import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";
import { IProduct } from "@/interfaces/IProduct";

async function getOneProduct(id: number | string): Promise<IProduct | string> {
  return customAxios.get(`${ServerPaths.PRODUCT.GET_ONE}/${id}`)
    .then(response => response.data)
    .catch(error => error.response.data.message)
}

export default getOneProduct;