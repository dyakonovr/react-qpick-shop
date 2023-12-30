import { IBasketItem } from "./basket.interface"
import { IUser } from "./user.interface"

export interface IOrder {
  id: number
  createdAt: string
  items: IBasketItem[]
  user: IUser
}