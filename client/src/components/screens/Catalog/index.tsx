import CardsContainer from '@/components/shared/CardsContainer';
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent as SheetWrapper,
} from '@/components/ui/sheet';
import { useProducts } from '@/hooks/features/useProducts/useProducts';
import { Settings2 as FiltersIcon } from 'lucide-react';
import CatalogPagination from './components/CatalogPagination';
import FiltersLayout from './components/FiltersLayout';
import { useFilters } from './hooks/useFilters';

function Catalog() {
  const { filters, changeFilters, page, changePage, searchTerm } = useFilters();
  const { data, isLoading, isSuccess } = useProducts({
    filters,
    page,
    searchTerm,
  });
  const isPaginationNeeded = data && data.totalPages > 1;
  const isProductsFound = !isLoading && isSuccess;

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
      />
      {!isProductsFound && <p>Товаров по таким запросам не найдено...</p>}

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