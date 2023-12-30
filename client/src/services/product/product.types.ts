import { IProduct } from "@/interfaces/product.interface";

export type ProductDataType = Omit<IProduct, "id">;

export enum ProductSortEnum {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}

export type ProductDataFiltersType = {
  sort?: ProductSortEnum,
  searchTerm?: string,
  page?: string | number,
  perPage?: string | number,
}