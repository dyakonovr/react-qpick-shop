import type { Category } from "@/entities/category";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: Category;
}
