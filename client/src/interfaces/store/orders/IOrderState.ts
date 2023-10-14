import IOrder from "./IOrder";

export default interface IOrderStats {
  list: IOrder[],
  lastOrderId: number,
}