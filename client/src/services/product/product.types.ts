import { IExtendedProduct, IProduct } from "@/types/features/product/product.types";
// export enum ProductSortEnum {
//   HIGH_PRICE = 'high-price',
//   LOW_PRICE = 'low-price',
//   NEWEST = 'newest',
//   OLDEST = 'oldest',
// }

export interface IProductResponse {
  products: IProduct[];
  currentPage: number;
  totalPages: number;
}

export interface IGetProductByIdResponse {
  product: IExtendedProduct;
  similarProducts: IProduct[];
}
