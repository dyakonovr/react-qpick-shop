import ICartProduct from "../cart/ICartProduct";

export default interface IOrder {
  id: number,
  products: ICartProduct[],
  price: number,
  fullAdress: string,
  bankAccount: string,
  clientNumber: string,
}