import ICartProduct from "./ICartProduct";

export default interface ICartState {
  products: ICartProduct[],
  quantity: number,
  deliveryPrice: number,
  totalPrice: number,
}