import { IBasketItem } from "@/interfaces/basket.interface";

export interface IBasketSlice {
  id: number | null,
  products: IBasketItem[] | null,
}