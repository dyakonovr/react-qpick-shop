import { IBasketProduct } from "@/types/product/product.types";

export interface IBasketItem {
  id: number;
  quantity: number;
  product: IBasketProduct;
}
