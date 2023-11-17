export interface IBasketProduct {
  id: number,
  productId: number,
  quantity: number
}

export interface IExtendedBasketProduct extends IBasketProduct {
  name: string,
  price: number,
  img: string
}