import styled from "@emotion/styled";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from "@mui/material";
import { Link, useRecordContext } from "react-admin";
import { IExtendedOrder } from "../order.type";

const TableCellRight = styled(TableCell)({ textAlign: "right" });

function OrderShowTable() {
  const record = useRecordContext<IExtendedOrder>();
  if (!record) return null;

  return (
    <>
      <Typography variant="h6" marginTop={2}>
        Товары заказа
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Фото</TableCell>
            <TableCell>Товар</TableCell>
            <TableCellRight>Цена за единицу</TableCellRight>
            <TableCellRight>Количество</TableCellRight>
            <TableCellRight>Общая цена</TableCellRight>
          </TableRow>
        </TableHead>
        <TableBody>
          {record.items && record.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img
                  src={item.oldProductImage}
                  title={item.oldProductName}
                  style={{ maxWidth: 75, maxHeight: 75 }}
                />
              </TableCell>
              <TableCell>
                <Link to={`/products/${item.productId}`}>{item.oldProductName}</Link>
              </TableCell>
              <TableCellRight>
                {item.oldProductPrice.toLocaleString(undefined, {
                  style: "currency",
                  currency: "RUB"
                })}
              </TableCellRight>
              <TableCellRight>{item.quantity}</TableCellRight>
              <TableCellRight>
                {(item.oldProductPrice * item.quantity).toLocaleString(undefined, {
                  style: "currency",
                  currency: "RUB"
                })}
              </TableCellRight>
            </TableRow>
          ))}

          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCellRight></TableCellRight>
            <TableCellRight>Итого</TableCellRight>
            <TableCellRight>
              {(+record.total).toLocaleString(undefined, {
                style: "currency",
                currency: "RUB"
              })}
            </TableCellRight>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default OrderShowTable;
