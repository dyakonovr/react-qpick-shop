import CardsContainer from '@/components/shared/CardsContainer/CardsContainer';
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
import FiltersLayout from './components/FiltersLayout/FiltersLayout';
import { useFilters } from './useFilters';

function Catalog() {
  const { filters, changeFilters, page, changePage, searchTerm } = useFilters();
  const { data } = useProducts({ filters, page, searchTerm });
  const isPaginationNeeded = data && data.totalPages > 1;
  const isProductsFound = data?.products && data?.products.length !== 0;

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

      {isProductsFound ? (
        <CardsContainer products={data.products} />
      ) : (
        <p>Товаров по таким запросам не найдено...</p>
      )}

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
