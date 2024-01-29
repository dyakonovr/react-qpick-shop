import { IProductFitlers } from '@/hooks/features/products/filters.types';
import { IExtendedProduct, IProduct } from '@/types/product.types';

export type ProductDataType = Omit<IExtendedProduct, 'id'>;

export enum ProductSortEnum {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

export type ProductDataFiltersType = {
  filters?: IProductFitlers;
  searchTerm?: string;
  page?: string | number;
  perPage?: string | number;
};

export type IProductResponse = {
  products: IProduct[];
  currentPage: number;
  totalPages: number;
};
