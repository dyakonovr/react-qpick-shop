import { IProduct } from '@/types/product/product.types';
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
