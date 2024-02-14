import { IProductFitlers } from "./filters.types";

export interface IProductQueryData {
  filters?: IProductFitlers;
  searchTerm?: string;
  page?: string | number;
  perPage?: string | number;
}
