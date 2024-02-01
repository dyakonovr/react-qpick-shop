import { Separator } from '@/components/ui/separator';
import { useFormContext } from 'react-hook-form';
import { NameAndIdObject } from "./checkboxes-filter.types";

type ICheckboxProps = {
  registerKey: string;
  object: NameAndIdObject;
};

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
