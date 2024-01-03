import { IExtendedProduct, IProduct } from '@/interfaces/product.interface';

export type ProductDataType = Omit<IExtendedProduct, 'id'>;

export enum ProductSortEnum {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

export type ProductDataFiltersType = {
  sort?: ProductSortEnum;
  searchTerm?: string;
  page?: string | number;
  perPage?: string | number;
};

export type IProductResponse = {
  products: IProduct[];
  currentPage: number;
  totalPages: number;
};
