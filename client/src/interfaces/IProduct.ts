export interface IProduct {
  id: number,
  name: string,
  price: number,
  rating: number,
  categoryId: number,
  imgs: string[],
  info: string[],
  // createdAt: string,
  // updatedAt: string
}

export type IProductWithoutId = Omit<IProduct, "id">;