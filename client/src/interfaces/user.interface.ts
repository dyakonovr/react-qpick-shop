import { Roles } from '@/enum/Roles';
import { IOrder } from './order.interface';
import { IProduct } from './product.interface';

export interface IUser {
  id: number;
  email: string;
  role: Roles;
}

export interface IFullUser {
  user: IUser;
  favourites: IProduct[];
  orders: IOrder[];
}
