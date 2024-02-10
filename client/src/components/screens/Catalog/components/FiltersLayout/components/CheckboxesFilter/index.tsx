import { ScrollArea } from '@/components/ui/scroll-area';
import FilterCheckbox from './FilterCheckbox';
import { INameAndIdObject } from './checkboxes-filter.types';

interface ICategoryFilterProps {
  filterTitle: string;
  data: INameAndIdObject[];
}

function CheckboxesFilter({ filterTitle, data }: ICategoryFilterProps) {
  return (
    <div>
      <p>{filterTitle}</p>
      <div className="mt-2">
        <ScrollArea className="max-h-[190px]">
          {data &&
            data.map((object) => (
              <FilterCheckbox
                registerKey="categories"
                object={object}
                key={object.id}
              />
            ))}
        </ScrollArea>
      </div>
    </div>
  );
}

export default CheckboxesFilter;
