import { useFormContext } from "react-hook-form";
import { INameAndIdObject } from "./checkboxes-filter.types";
import { Separator } from "@/components/ui/shadcn/separator";

interface ICheckboxProps {
  registerKey: string;
  object: INameAndIdObject;
}

function FilterCheckbox({ registerKey, object }: ICheckboxProps) {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label className="text-base font-medium leading-none cursor-pointer">
          <input
            type="checkbox"
            {...register(registerKey)}
            value={object.id}
            className="mr-2 cursor-pointer"
          />
          {object.name}
        </label>
      </div>
      <Separator className="mb-2" />
    </div>
  );
}

export default FilterCheckbox;
