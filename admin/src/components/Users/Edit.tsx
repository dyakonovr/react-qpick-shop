import { Edit, SelectInput, SimpleForm, TextInput, required } from "react-admin";
import Title from "../Title";

const roleChoices = [
  { id: "USER", name: "USER" },
  { id: "ADMIN", name: "ADMIN" }
];

function UserEdit() {
  return (
    <Edit title={<Title prefixText="Пользователь" />} actions={false}>
      <SimpleForm>
        <TextInput source="email" fullWidth />
        <SelectInput
          source="role"
          choices={roleChoices}
          validate={required()}
          fullWidth
        />
      </SimpleForm>
    </Edit>
  );
}

export default UserEdit;
