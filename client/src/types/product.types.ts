import { ICategory } from './category.types';

export type ProductInfo = {
  name: string;
  value: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
};

export type BasketProduct = Omit<Product, 'rating'>;

export type ExtendedProduct = {
  id: number;
  name: string;
  price: number;
  rating: number;
  imgs: string[];
  info: string;
  discountId: number | null;
  category: ICategory;
};

export type ProductWithoutId = Omit<ExtendedProduct, 'id'>;
