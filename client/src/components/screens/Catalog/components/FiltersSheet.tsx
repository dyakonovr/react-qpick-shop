import { Settings2 as FiltersIcon } from "lucide-react";
import FiltersLayout from "./FiltersLayout";
import CatalogSortSelect from "./CatalogSortSelect";
import type { ProductSortType } from "@/services/product/product.types";
import type { IProductQueryData } from "@/types/features/product/query-data.types";
import type { IProductFitlers } from "@/types/features/product/filters.types";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent as SheetWrapper
} from "@/components/ui/shadcn/sheet";

interface IFiltersSheetProps {
  isSortSelectNeeded: boolean;
  sort: ProductSortType | undefined;
  changeQueryParams: (queryData: IProductQueryData) => void;
  filters: IProductFitlers;
}

function FiltersSheet({
  isSortSelectNeeded,
  sort,
  changeQueryParams,
  filters
}: IFiltersSheetProps) {
  return (
    <Sheet>
      <div className="flex gap-5 items-center mb-3 flex-wrap">
        <strong className="subtitle">Каталог</strong>
        <SheetTrigger className="link flex items-center gap-2 py-1 px-2 rounded-md me-auto">
          <FiltersIcon />
          Посмотреть фильтры
        </SheetTrigger>
        {isSortSelectNeeded && (
          <CatalogSortSelect sort={sort} changeQueryParams={changeQueryParams} />
        )}
      </div>
      <SheetWrapper className="w-full sm:w-content">
        <SheetHeader className="mb-7">
          <SheetTitle className="flex items-center gap-2">
            <FiltersIcon /> Фильтры
          </SheetTitle>
        </SheetHeader>
        {/* Sheet Content */}
        <div>
          <FiltersLayout filters={filters} changeQueryParams={changeQueryParams} />
        </div>
        {/* Sheet Content END */}
      </SheetWrapper>
    </Sheet>
  );
}

export default FiltersSheet;
