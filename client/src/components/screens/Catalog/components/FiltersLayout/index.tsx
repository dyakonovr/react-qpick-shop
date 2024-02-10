import { SheetClose } from '@/components/ui/sheet';
import { useCategories } from '@/hooks/features/useCategories';
import { IMinMaxRange, IProductFitlers } from '@/types/product/filters.types';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { getDirtyValues } from './get-dirty-values.helper';
import RangeFilter from "./components/RangeFilter";
import CheckboxesFilter from "./components/CheckboxesFilter";

interface IFiltersFormValues {
  categories?: string[]; // number[] after getDirtyValues();
  price?: IMinMaxRange;
  rating?: IMinMaxRange;
};

interface IFiltersLayoutProps {
  changeFilters: (filters: IProductFitlers) => void;
  filters: IProductFitlers;
};

function FiltersLayout({ filters, changeFilters }: IFiltersLayoutProps) {
  const methods = useForm<IFiltersFormValues>({ mode: 'onChange' });
  const { handleSubmit, setValue, reset } = methods;
  const { categories } = useCategories();

  useEffect(() => {
    if (Object.keys(filters).length === 0) return reset();

    setAllFormValues();
  }, [filters]);

  // Функции
  function onSubmit(data: IFiltersFormValues) {
    const dirtyValues = getDirtyValues<IFiltersFormValues>(data, {
      tryToParseNumbersInArray: true,
    }) as IProductFitlers;
    changeFilters(dirtyValues);
  }

  function setAllFormValues() {
    try {
      let filterKey: keyof IFiltersFormValues;
      for (filterKey in filters) {
        const filter = filters[filterKey];

        if (filter instanceof Object && !Array.isArray(filter)) {
          let innerObjectKey: keyof typeof filter;
          for (innerObjectKey in filter) {
            // Я не знаю, как иначе ＞﹏＜
            // @ts-ignore
            setValue(`${filterKey}.${innerObjectKey}`, filter[innerObjectKey]);
          }
          continue;
        } else if (Array.isArray(filter)) {
          setValue(
            filterKey,
            filter.map((el) => String(el))
          );
        } else setValue(filterKey, filter);
      }
    } catch (e) {
      console.log(e);
    }
  }
  // Функции END

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <RangeFilter
          filterTitle="Цена"
          registerMinInputKey="price.min"
          registerMaxInputKey="price.max"
          min={0}
          max={10000}
          step={1}
        />
        {categories && (
          <CheckboxesFilter filterTitle="Категория" data={categories} />
        )}
        <RangeFilter
          filterTitle="Рейтинг"
          registerMinInputKey="rating.min"
          registerMaxInputKey="rating.max"
          min={0}
          max={5}
          step={0.1}
        />
        <div className="flex gap-3">
          <SheetClose asChild>
            <button type="submit" className="link w-fit px-5 py-1">
              Показать
            </button>
          </SheetClose>
          <button
            type="button"
            className="link w-fit px-5 py-1"
            onClick={() => changeFilters({})}
          >
            Очистить фильтры
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default FiltersLayout;
