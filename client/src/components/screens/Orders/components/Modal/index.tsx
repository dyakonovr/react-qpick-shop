import OrderModalProductItem from "./ProductItem";
import type { IOrder } from "@/types/features/order.types";
import Modal from "@/components/ui/local/Modal";
import { Button } from "@/components/ui/shadcn/button";
import { normalizePrice } from "@/functions/normalizePrice";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/shadcn/table";

function OrderModal({ order }: { order: IOrder }) {
  return (
    <Modal
      title={`Детали заказа №${order.id}`}
      openModalElement={<Button>Детали</Button>}
    >
      <div>
        <p className="text-lg">
          <span className="font-medium">Дата оформления заказа:</span>{" "}
          {new Date(order.createdAt).toLocaleString()}
        </p>
        <p className="text-lg">
          <span className="font-medium">Полная стоимость:</span>{" "}
          {normalizePrice(order.total)}
        </p>
        <p className="text-lg font-medium">Товары:</p>
        <Table className="rounded-md border mt-3">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Фото</TableHead>
              <TableHead className="text-center">Название</TableHead>
              <TableHead className="text-center">Цена</TableHead>
              <TableHead className="text-center">Количество</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.items.map((item) => (
              <OrderModalProductItem item={item} key={item.id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </Modal>
  );
}

export default OrderModal;
