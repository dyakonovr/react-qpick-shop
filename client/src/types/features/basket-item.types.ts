import type { IBasketProduct } from "@/types/features/product/product.types";

export interface IBasketItem {
  id: number;
  quantity: number;
  product: IBasketProduct;
}
