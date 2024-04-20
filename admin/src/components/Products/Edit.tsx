import {
  ArrayInput,
  Datagrid,
  Edit,
  EditButton,
  ImageField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  ReferenceManyField,
  SelectInput,
  SimpleFormIterator,
  TabbedForm,
  TextField,
  TextInput,
  required
} from "react-admin";
import Title from "../Title";

function ProductEdit() {
  return (
    <Edit title={<Title prefixText="Продукт" />} actions={false}>
      <TabbedForm>
        <TabbedForm.Tab label="Основная информация">
          <TextInput source="name" fullWidth validate={req} />
          <NumberInput source="price" fullWidth validate={req} />
          <NumberInput source="rating" fullWidth validate={req} />
          <div>
            <span>
              Ссылка на текущую категорию:{" "}
              <ReferenceField source="category_id" reference="categories" />
            </span>
            <ReferenceInput source="category_id" reference="categories">
              <SelectInput optionText="name" validate={req} fullWidth />
            </ReferenceInput>
          </div>
          <ImageField source="image" />
          <TextInput source="image" fullWidth validate={req} />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Характеристики">
          <ArrayInput source="info" fullWidth>
            <SimpleFormIterator disableReordering fullWidth>
              <TextInput source="name" fullWidth helperText={false} validate={req} />
              <TextInput source="value" fullWidth helperText={false} validate={req} />
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Галерея">
          <ArrayInput source="gallery" fullWidth>
            <SimpleFormIterator disableReordering fullWidth>
              <ImageField source="url" />
              <TextInput source="url" fullWidth helperText={false} validate={req} />
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
}
const req = [required()];

export default ProductEdit;
