import customAxios from "@/axios";
import { ServerPaths } from "@/enum/ServerPaths";
import { IProduct, IProductWithoutId } from '@/interfaces/IProduct';

export async function createProduct(product: IProductWithoutId): Promise<IProduct | string> {
  return customAxios.post(ServerPaths.PRODUCT.CREATE, product)
    .then(response => response.data)
    .catch(error => error.response.data.message)
}