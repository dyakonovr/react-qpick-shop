import { Roles } from '@/enum/Roles';
import { IOrder } from './order.interface';
import { IExtendedProduct } from './product.interface';

export interface IUser {
  id: number;
  email: string;
  role: Roles;
}

export interface IFullUser {
  user: IUser;
  favourites: IExtendedProduct[];
  orders: IOrder[];
}
