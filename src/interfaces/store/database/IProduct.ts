interface InfoObject {
  [name: string]: string
}

export default interface IProduct {
  id: number,
  categoryId: number,
  name: string,
  info: InfoObject,
  currentPrice: number,
  oldPrice?: number,
  images: string[],
  rating: number
}