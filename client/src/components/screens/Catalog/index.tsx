import { Settings2 as FiltersIcon } from "lucide-react";
import CatalogPagination from "./components/CatalogPagination";
import FiltersLayout from "./components/FiltersLayout";
import { useFilters } from "./hooks/useFilters";
import { useProducts } from "@/hooks/features/useProducts";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent as SheetWrapper
} from "@/components/ui/shadcn/sheet";
import CardsContainer from "@/components/ui/local/CardsContainer";

function Catalog() {
  const { filters, changeFilters, page, changePage, searchTerm } = useFilters();
  const { data, isLoading, isSuccess, isError } = useProducts({
    filters,
    page,
    searchTerm
  });
  const isPaginationNeeded = data && data.totalPages > 1;

  return (
    <section className="rows-container">
      <Sheet>
        <div className="flex gap-5 items-center mb-3">
          <strong className="subtitle">Каталог</strong>
          <SheetTrigger className="link flex items-center gap-2 py-1 px-2 rounded-md">
            <FiltersIcon />
            Посмотреть фильтры
          </SheetTrigger>
        </div>
        <SheetWrapper>
          <SheetHeader className="mb-7">
            <SheetTitle className="flex items-center gap-2">
              <FiltersIcon /> Фильтры
            </SheetTitle>
          </SheetHeader>
          {/* Sheet Content */}
          <div>
            <FiltersLayout filters={filters} changeFilters={changeFilters} />
          </div>
          {/* Sheet Content END */}
        </SheetWrapper>
      </Sheet>

      <CardsContainer
        products={data?.products}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />

      {isPaginationNeeded && (
        <CatalogPagination
          currentPage={page}
          totalPages={data.totalPages}
          setCurrentPage={changePage}
        />
      )}
    </section>
  );
}

export default Catalog;
