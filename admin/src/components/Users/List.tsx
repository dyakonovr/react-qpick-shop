import { Datagrid, EditButton, List, TextField } from "react-admin";

function UsersList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="email" />
        <TextField source="role" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export default UsersList;
