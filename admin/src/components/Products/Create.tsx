import {
  ArrayInput,
  Create,
  ImageField,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleFormIterator,
  TabbedForm,
  TextInput,
  required
} from "react-admin";

function ProductCreate() {
  return (
    <Create>
      <TabbedForm>
        <TabbedForm.Tab label="Основная информация">
          <TextInput source="name" fullWidth />
          <NumberInput source="price" fullWidth />
          <NumberInput source="rating" fullWidth />
          <ReferenceInput source="category_id" reference="categories">
            <SelectInput optionText="name" fullWidth validate={required()} />
          </ReferenceInput>
          <ImageField source="image" />
          <TextInput source="image" fullWidth />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Характеристики">
          <ArrayInput source="info" fullWidth>
            <SimpleFormIterator disableReordering fullWidth>
              <TextInput source="name" fullWidth helperText={false} />
              <TextInput source="value" fullWidth helperText={false} />
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Галерея">
          <ArrayInput source="gallery" fullWidth>
            <SimpleFormIterator disableReordering fullWidth>
              <ImageField source="url" />
              <TextInput source="url" fullWidth helperText={false} />
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>
      </TabbedForm>
    </Create>
  );
}

export default ProductCreate;
