import OrderItemProduct from "./OrderItemProduct";
import classes from "./styles.module.scss";
import type { IOrder } from "@/types/features/order.types";
import { normalizePrice } from "@/functions/normalizePrice";

function OrderViewItem({ order }: { order: IOrder }) {
  return (
    <div className="rounded_white_block">
      <p className="m-0 flex flex-col sm:flex-row gap-1 sm:gap-4">
        <span className="font-semibold">Заказ №{order.id}</span>{" "}
        <span>Дата оформления: {new Date(order.createdAt).toLocaleString()}</span>
      </p>
      <ul className={`mt-4 ${classes.custom_items_grid} gap-5`}>
        {order.items.map((orderItemProduct) => (
          <OrderItemProduct orderItemProduct={orderItemProduct} />
        ))}
      </ul>
      <p className="mt-3 font-semibold">Итого: {normalizePrice(order.total)}</p>
    </div>
  );
}

export default OrderViewItem;
