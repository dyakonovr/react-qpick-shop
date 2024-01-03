import { IExtendedProduct } from './product.interface';

export interface IBasket {
  id: number;
  userId: number;
}

export interface IBasketItem {
  id: number;
  product: IExtendedProduct;
  quantity: number;
  price: number;
}
