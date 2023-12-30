export interface IProduct {
  id: number,
  name: string,
  price: number,
  rating: number,
  categoryId: number,
  imgs: string[],
  info: string[],
  discountId: number | null
}

export type IProductWithoutId = Omit<IProduct, "id">;