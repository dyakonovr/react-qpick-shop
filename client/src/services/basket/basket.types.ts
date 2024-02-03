import { BasketProduct } from '@/types/product.types';

export type IBasketResponse = {
  id: number;
  products: IBasketItem[];
};

export type IBasketItem = {
  id: number;
  quantity: number;
  product: BasketProduct;
};
