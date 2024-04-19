export interface IOrder {
  id: number;
  total: number;
  createdAt: string;
  items: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  oldProductPrice: number;
  oldProductImage: string;
  oldProductName: string;
  quantity: number;
  productId: number;
}
