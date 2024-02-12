export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export type IBasketProduct = Omit<IProduct, "rating">;

export interface IProductInfo {
  name: string;
  value: string;
}

export interface IExtendedProduct extends IProduct {
  gallery: string[];
  info: IProductInfo[];
  category: string;
}

export interface IProductForCreating
  extends Omit<IExtendedProduct, "id" | "category"> {
  categoryId: number;
}
