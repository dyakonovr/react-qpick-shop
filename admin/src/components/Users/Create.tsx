import { Create, SimpleForm, TextInput } from "react-admin";

function CategoryCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default CategoryCreate;