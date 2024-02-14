import { sortTypes } from "./sort-types.constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/shadcn/select";
import { ProductSort } from "@/services/product/product.types";

interface ICatalogSortSelectProps {
  sort: ProductSort | undefined;
  changeSort: (newSort: ProductSort) => void;
}

function CatalogSortSelect({ sort, changeSort }: ICatalogSortSelectProps) {
  return (
    <Select
      onValueChange={(value) => changeSort(value as ProductSort)}
      defaultValue={sort}
    >
      <SelectTrigger className="w-[180px] ms-auto">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(sortTypes).map(([key, value]) => (
          <SelectItem value={key} key={key}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CatalogSortSelect;
