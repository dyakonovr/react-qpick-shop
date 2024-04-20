import { DateField, Show, SimpleShowLayout, TextField, Link, useRecordContext, ReferenceField } from "react-admin";
import OrderShowTable from "./table";
import { IExtendedOrder } from "../order.type";

function OrderShow() {
  const record = useRecordContext<IExtendedOrder>();

  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" label="Номер" />
        <DateField source="created_at" showTime label="Создан" />
        {/* <Link to={`/users/${record.user.id}`}></Link> */}
        <ReferenceField source="user.id" reference="users" label="Пользователь" />
        <TextField source="user.email" label="Почта пользователя" />
        <OrderShowTable />
      </SimpleShowLayout>
    </Show>
  );
}

export default OrderShow;
