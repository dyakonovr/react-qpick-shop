import { OrdersTable } from "./components/Table";
import { useTypedSelector } from "@/hooks/general/useTypedSelector";

function Orders() {
  const { data: orders } = useTypedSelector((state) => state.orders);

  return (
    <div>
      <strong className="subtitle">Заказы</strong>
      {!orders || orders.length === 0 ? (
        <p>Заказов пока нет...</p>
      ) : (
        <OrdersTable orders={orders} />
      )}
    </div>
  );
}

export default Orders;
