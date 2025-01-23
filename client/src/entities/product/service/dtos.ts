import type { IProduct } from "../model";

type IProductSortValues =
  | "high-price"
  | "low-price"
  | "high-rating"
  | "low-rating"
  | "default";

interface IMinMaxRange {
  min?: number;
  max?: number;
}

interface IProductFitlers {
  categories?: number[];
  price?: IMinMaxRange;
  rating?: IMinMaxRange;
}

export interface IGetAllProductsRequestParams {
  filters?: IProductFitlers;
  searchTerm?: string;
  page?: string | number;
  perPage?: string | number;
  sort?: IProductSortValues;
}

export interface IGetAllProductsResponse {
  products: IProduct[];
  currentPage: number;
  totalPages: number;
}
