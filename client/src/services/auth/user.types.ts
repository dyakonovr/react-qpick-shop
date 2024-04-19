import type { IUser } from "@/types/features/user.types";
import type { IProduct } from "@/types/features/product/product.types";
import type { IBasketItem } from "@/types/features/basket-item.types";
import type { IOrder } from "@/types/features/order.types";

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  favourites: IProduct[];
  basket: {
    id: number;
    products: IBasketItem[];
  };
  orders: IOrder[];
  accessToken: string;
  refreshToken: string;
}
