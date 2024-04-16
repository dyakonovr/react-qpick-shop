import OrderViewItem from "./OrderItem/ViewItem";
import type { IOrder } from "@/types/features/order.types";

function OrdersList({ orders }: { orders: IOrder[] }) {
  return (
    <div className="flex flex-col gap-3 mt-3">
      {orders && orders.map((order) => <OrderViewItem order={order} key={order.id} />)}
    </div>
  );
}

export default OrdersList;
