export type IProductInfo = {
  name: string;
  value: string;
}

export type IProduct = {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export type IBasketProduct = Omit<IProduct, 'rating'>;

export type IExtendedProduct = {
  id: number;
  name: string;
  price: number;
  rating: number;
  categoryId: number;
  imgs: string[];
  info: string;
  discountId: number | null;
}

export type IProductWithoutId = Omit<IExtendedProduct, 'id'>;
