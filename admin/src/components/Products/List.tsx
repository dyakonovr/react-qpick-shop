import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  NumberField,
  TextField
} from "react-admin";
import { IProduct } from "./product.type";

function ProductsList() {
  return (
    <List>
      <Datagrid align="center">
        <NumberField source="id" />
        <TextField source="name" />
        <NumberField source="price" />
        <NumberField source="rating" />
        <NumberField source="category_id" label="Category ID" />
        <FunctionField label="Name" render={(record: IProduct) => record.category.name} />
        ;
        <EditButton />
      </Datagrid>
    </List>
  );
}

export default ProductsList;
