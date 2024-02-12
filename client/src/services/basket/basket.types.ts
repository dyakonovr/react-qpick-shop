import { IBasketItem } from "@/types/basket-item.types";

export interface IBasketResponse {
  id: number;
  products: IBasketItem[];
}
