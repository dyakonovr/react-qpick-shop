import { IProduct } from "./product.interface"

export interface IBasket {
  id: number,
  userId: number
}

export interface IBasketItem {
  id: number
  product: IProduct
  quantity: number
  price: number
}