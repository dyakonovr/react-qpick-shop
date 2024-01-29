import CardsContainer from '@/components/shared/CardsContainer/CardsContainer';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useProducts } from '@/hooks/features/products/useProducts';
import { Settings2 as SettingIcon } from 'lucide-react';
import FiltersLayout from './components/FiltersLayout/FiltersLayout';
import { useFilters } from './useFilters';

function Catalog() {
  const { filters, changeFiltersInUrl } = useFilters();
  const { isSuccess, data } = useProducts(filters);

  return (
    <section className="rows-container">
      <Sheet>
        <div className="flex gap-5 items-center mb-3">
          <strong className="subtitle">Каталог</strong>
          <SheetTrigger className="link flex items-center gap-2 py-1 px-2 rounded-md">
            <SettingIcon />
            Посмотреть фильтры
          </SheetTrigger>
        </div>
        <SheetContent>
          <SheetHeader className="mb-7">
            <SheetTitle className="flex items-center gap-2">
              <SettingIcon /> Фильтры
            </SheetTitle>
          </SheetHeader>

          <FiltersLayout
            filters={filters}
            changeFiltersInUrl={changeFiltersInUrl}
          />
          
        </SheetContent>
      </Sheet>
      {isSuccess && data?.products && (
        <CardsContainer products={data.products} />
      )}
    </section>
  );
}

export default Catalog;
