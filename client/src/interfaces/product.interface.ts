export interface IProductInfo {
  name: string;
  value: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export interface IExtendedProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  categoryId: number;
  imgs: string[];
  info: string;
  discountId: number | null;
}

// export interface IExtendedProductWithDecodedInfo extends Omit<IExtendedProductWithEncodedInfo, 'info'> {
//   info: IProductInfo[];
// }

export type IProductWithoutId = Omit<IExtendedProduct, 'id'>;
