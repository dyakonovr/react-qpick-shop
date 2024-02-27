import CatalogPagination from "./components/CatalogPagination";
import { useFilters } from "./hooks/useFilters";
import FiltersSheet from "./components/FiltersSheet";
import { useProducts } from "@/hooks/features/useProducts";
import CardsContainer from "@/components/ui/local/CardsContainer";

function Catalog() {
  const { filters, changeQueryParams, page, sort, searchTerm } = useFilters();
  const { data, isLoading, isSuccess, isError } = useProducts({
    filters,
    page,
    searchTerm,
    sort
  });
  const isPaginationNeeded = data && data.totalPages > 1;
  const isSortSelectNeeded = data?.products && data.products.length !== 0;

  return (
    <section className="rows-container">
      <FiltersSheet
        isSortSelectNeeded={isSortSelectNeeded || false}
        sort={sort}
        filters={filters}
        changeQueryParams={changeQueryParams}
      />

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
          changeQueryParams={changeQueryParams}
        />
      )}
    </section>
  );
}

export default Catalog;
