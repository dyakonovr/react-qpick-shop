export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export type IBasketProduct = Omit<IProduct, "rating">;

interface IProductInfo {
  name: string;
  value: string;
}

export interface IExtendedProduct extends IProduct {
  gallery: string[];
  info: IProductInfo[];
  categoryName: string;
}

export interface IProductForCreating extends Omit<IExtendedProduct, "id" | "category"> {
  categoryId: number;
}
