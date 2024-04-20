import { useRecordContext } from "react-admin";

function Title({ prefixText = "" }: { prefixText?: string }) {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <span>
      {prefixText} {record.name} (id: {record.id})
    </span>
  );
}


export default Title;