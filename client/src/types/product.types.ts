export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
};

export type BasketProduct = Omit<Product, 'rating'>;

export type ProductInfo = {
  name: string;
  value: string;
};

export interface ExtendedProduct extends Product {
  gallery: string[];
  info: ProductInfo[];
  category: string;
}

export type ProductWithoutId = Omit<ExtendedProduct, 'id'>;
