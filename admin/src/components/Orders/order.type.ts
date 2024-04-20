export interface IOrder {
  id: number;
  created_at: string;
  items_count: string;
  total: string;
}

export interface IExtendedOrder extends Omit<IOrder, "items_count"> {
  user: { id: number; email: string };
  items: IOrderItem[];
}

interface IOrderItem {
  id: number;
  oldProductPrice: number;
  oldProductName: string;
  oldProductImage: string;
  quantity: number;
  productId: number;
}
