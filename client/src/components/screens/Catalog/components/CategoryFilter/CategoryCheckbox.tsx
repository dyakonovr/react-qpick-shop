import { Separator } from '@/components/ui/separator';
import { ICategory } from '@/types/category.types';
import { useFormContext } from 'react-hook-form';

type ICategoryCheckboxProps = {
  registerKey: string;
  category: ICategory;
};

function CategoryCheckbox({ registerKey, category }: ICategoryCheckboxProps) {
  const { register, control } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          <input
            type="checkbox"
            {...register(registerKey)}
            value={category.id}
            className="mr-2"
          />
          {category.name}
        </label>
      </div>
      <Separator className="mb-2" />
    </div>
  );
}

export default CategoryCheckbox;
