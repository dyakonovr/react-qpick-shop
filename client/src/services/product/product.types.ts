import { IExtendedProduct, IProduct } from "@/types/features/product/product.types";

export type ProductSort =
  | "high-price"
  | "low-price"
  | "high-rating"
  | "low-rating"
  | "default";

export interface IProductResponse {
  products: IProduct[];
  currentPage: number;
  totalPages: number;
}

export interface IGetProductByIdResponse {
  product: IExtendedProduct;
  similarProducts: IProduct[];
}
