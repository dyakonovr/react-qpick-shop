export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: ICategory;
}

interface ICategory {
  id: number;
  name: string;
}
