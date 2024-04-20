import { Datagrid, EditButton, Identifier, List, RaRecord, TextField } from "react-admin";

function CategoriesList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export default CategoriesList;
