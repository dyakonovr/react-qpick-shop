import OrderModal from "./Modal";
import type { IOrder } from "@/types/features/order.types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/shadcn/table";
import { normalizePrice } from "@/functions/normalizePrice";

export function OrdersTable({ orders }: { orders: IOrder[] }) {
  return (
    <Table className="rounded-md border mt-3">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">№</TableHead>
          <TableHead className="text-center">Дата заказа</TableHead>
          <TableHead className="text-center">Общая цена</TableHead>
          <TableHead className="text-center"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell className="text-center">
              {new Date(order.createdAt).toLocaleString()}
            </TableCell>
            <TableCell className="text-center">{normalizePrice(order.total)}</TableCell>
            <TableCell className="text-center">
              <OrderModal order={order} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
