import type { IProduct } from "./IProduct";
import type { Category } from "@/entities/category";

export class ProductModel implements IProduct {
  public id: number;
  public name: string;
  public price: number;
  public rating: number;
  public image: string;
  public category: Category;

  constructor(
    id: number,
    name: string,
    price: number,
    rating: number,
    image: string,
    category: Category
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.image = image;
    this.category = category;
  }
}
