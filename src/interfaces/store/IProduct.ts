export default interface IProduct {
  id: number,
  categoryId: number,
  name: string,
  info: string[],
  currentPrice: number,
  oldPrice: number,
  images: string[],
  rating: number
}