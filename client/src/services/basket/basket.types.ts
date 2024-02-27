import type { IBasketItem } from "@/types/features/basket-item.types";

export interface IBasketResponse {
  id: number;
  products: IBasketItem[];
}
