import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";
import { IProduct } from "@/interfaces/IProduct";

async function getProducts(): Promise<IProduct[] | string> {
  return customAxios.get(ServerPaths.PRODUCT.GET_ALL)
    .then(response => response.data)
    .catch(error => error.response.data.message)
}

export default getProducts;