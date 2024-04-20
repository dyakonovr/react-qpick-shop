import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DateField,
  FunctionField,
  ReferenceInput,
  DateInput
} from "react-admin";
import { IOrder } from "./order.type";

const listFilters = [
  <DateInput source="created_at" alwaysOn />,
  <DateInput source="created_at" alwaysOn />,
  <ReferenceInput source="user_id" reference="users" />
];

function OrdersList() {
  return (
    <List filters={listFilters}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="id" />
        <DateField source="created_at" showTime />
        <TextField source="items_count" />
        <FunctionField
          source="total"
          render={(record: IOrder) =>
            String(
              new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB"
              }).format(+record.total)
            )
          }
        />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

export default OrdersList;
