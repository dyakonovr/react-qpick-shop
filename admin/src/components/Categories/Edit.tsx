import {
  Datagrid,
  Edit,
  EditButton,
  Labeled,
  NumberField,
  Pagination,
  ReferenceManyField,
  SimpleForm,
  TextField,
  TextInput,
  useRecordContext
} from "react-admin";
import Title from "../Title";

function CategoryEdit() {
  return (
    <Edit title={<Title prefixText="Категория" />} actions={false}>
      <SimpleForm>
        <TextInput source="name" fullWidth />
        <Labeled label="Продукты этой категории" fullWidth>
          <ReferenceManyField
            reference="products"
            target="category_id"
            pagination={<Pagination />}
          >
            <Datagrid
              sx={{
                "& .column-thumbnail": {
                  width: 25,
                  padding: 0
                }
              }}
            >
              <TextField source="id" />
              <TextField source="name" />
              <NumberField source="price" />
              <NumberField source="rating" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </Labeled>
      </SimpleForm>
    </Edit>
  );
}

export default CategoryEdit;
