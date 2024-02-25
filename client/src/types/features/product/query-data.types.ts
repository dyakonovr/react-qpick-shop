import { IProductFitlers } from "./filters.types";
import { ProductSortType } from "@/services/product/product.types";

export interface IProductQueryData {
  filters?: IProductFitlers;
  searchTerm?: string;
  page?: string | number;
  perPage?: string | number;
  sort?: ProductSortType;
}
