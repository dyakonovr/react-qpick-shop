import { IProductFitlers } from '@/hooks/features/useProducts/filters.types';
import { ExtendedProduct, Product } from '@/types/product.types';

export type ProductDataType = Omit<ExtendedProduct, 'id'>;

export enum ProductSortEnum {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

export type ProductQueryData = {
  filters?: IProductFitlers;
  searchTerm?: string;
  page?: string | number;
  perPage?: string | number;
};

export type ProductResponse = {
  products: Product[];
  currentPage: number;
  totalPages: number;
};
