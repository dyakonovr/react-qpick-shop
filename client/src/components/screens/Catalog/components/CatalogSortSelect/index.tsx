import { sortTypes } from "./sort-types.constant";
import type { ProductSortType } from "@/services/product/product.types";
import type { IProductQueryData } from "@/types/features/product/query-data.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/shadcn/select";

interface ICatalogSortSelectProps {
  sort: ProductSortType | undefined;
  changeQueryParams: (queryData: IProductQueryData) => void;
}

function CatalogSortSelect({ sort, changeQueryParams }: ICatalogSortSelectProps) {
  return (
    <Select
      onValueChange={(value) => changeQueryParams({ sort: value as ProductSortType })}
      defaultValue={sort}
    >
      <SelectTrigger className="w-[180px]">
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
