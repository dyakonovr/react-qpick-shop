import { ProductSort } from "@/services/product/product.types";

type ISortTypes = {
  [key in ProductSort]: string;
};

export const sortTypes: ISortTypes = {
  default: "Default",
  "high-price": "High price",
  "low-price": "Low price",
  "high-rating": "High rating",
  "low-rating": "Low rating"
};
