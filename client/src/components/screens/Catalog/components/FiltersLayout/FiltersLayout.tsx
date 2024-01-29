import {
  IMinMaxRange,
  IProductFitlers,
} from '@/hooks/features/products/filters.types';
import { useCategories } from '@/hooks/features/useCategories';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import RangeFilter from '../RangeFilter/RangeFilter';
import { getDirtyValues } from './filters.helper';

export type FiltersFormValues = {
  categories?: string[]; // number[]
  price?: IMinMaxRange;
  rating?: IMinMaxRange;
};

type FiltersLayoutProps = {
  changeFiltersInUrl: (filters: IProductFitlers) => void;
  filters: IProductFitlers;
};

function FiltersLayout({ filters, changeFiltersInUrl }: FiltersLayoutProps) {
  const methods = useForm<FiltersFormValues>({ mode: 'onChange' });
  const { handleSubmit, setValue } = methods;
  const { categories } = useCategories();

  useEffect(() => {
    if (Object.keys(filters).length === 0) return;

    setAllFormValues();
  }, [filters]);

  // Функции
  function onSubmit(data: FiltersFormValues) {
    changeFiltersInUrl(getDirtyValues(data));
  }

  function setAllFormValues() {
    try {
      let filterKey: keyof FiltersFormValues;
      for (filterKey in filters) {
        const filter = filters[filterKey];

        if (filter instanceof Object && !Array.isArray(filter)) {
          let innerObjectKey: keyof typeof filter;
          for (innerObjectKey in filter) {
            // Я не знаю, как иначе =(
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
          min="0"
          max="10000"
          step="1"
        />
        {categories && <CategoryFilter data={categories} />}
        <RangeFilter
          filterTitle="Рейтинг"
          registerMinInputKey="rating.min"
          registerMaxInputKey="rating.max"
          min="0"
          max="1000"
          step="1"
        />
        <button type="submit" className="link w-fit px-5 py-1">
          Показать
        </button>
      </form>
    </FormProvider>
  );
}

export default FiltersLayout;
