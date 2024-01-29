import { ScrollArea } from '@/components/ui/scroll-area';
import { ICategory } from '@/types/category.types';
import CategoryCheckbox from './CategoryCheckbox';

interface ICategoryFilterProps {
  data: ICategory[];
}

function CategoryFilter({ data }: ICategoryFilterProps) {
  return (
    <div>
      <p>Категория</p>
      <div className="mt-2">
        <ScrollArea>
          {data &&
            data.map((category) => (
              <CategoryCheckbox
                registerKey="categories"
                category={category}
                key={category.id}
              />
            ))}
        </ScrollArea>
      </div>
    </div>
  );
}

export default CategoryFilter;
