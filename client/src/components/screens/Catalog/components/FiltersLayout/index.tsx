import { SheetClose } from '@/components/ui/sheet';
import { useCategories } from '@/hooks/features/useCategories';
import {
  IMinMaxRange,
  IProductFitlers,
} from '@/hooks/features/useProducts/filters.types';
import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CheckboxesFilter from '../CheckboxesFilter';
import RangeFilter from '../RangeFilter';
import { getDirtyValues } from './get-dirty-values.helper';

export type FiltersFormValues = {
  categories?: string[]; // number[] after getDirtyValues();
  price?: IMinMaxRange;
  rating?: IMinMaxRange;
};

type FiltersLayoutProps = {
  changeFilters: (filters: IProductFitlers) => void;
  filters: IProductFitlers;
};

function FiltersLayout({ filters, changeFilters }: FiltersLayoutProps) {
  const methods = useForm<FiltersFormValues>({ mode: 'onChange' });
  const { handleSubmit, setValue, reset } = methods;
  const { categories } = useCategories();
  const closeSheetButtonRef = useRef(null);

  useEffect(() => {
    if (Object.keys(filters).length === 0) return reset();

    setAllFormValues();
  }, [filters]);

  // Функции
  function onSubmit(data: FiltersFormValues) {
    const dirtyValues = getDirtyValues(data, {
      tryToParseNumbersInArray: true,
    });
    changeFilters(dirtyValues);
  }

  function setAllFormValues() {
    try {
      let filterKey: keyof FiltersFormValues;
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
        }

        if (Array.isArray(filter)) {
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
