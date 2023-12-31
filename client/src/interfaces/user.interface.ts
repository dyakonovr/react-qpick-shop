import { Roles } from "@/enum/Roles"
import { IProduct } from "./product.interface"
import { IOrder } from "./order.interface"

export interface IUser {
  id: number
  email: string
  role: Roles
}

export interface IFullUser {
  user: IUser
  favourites: IProduct[]
  orders: IOrder[]
}