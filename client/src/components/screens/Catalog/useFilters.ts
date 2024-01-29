import { IProductFitlers } from '@/hooks/features/products/filters.types';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  configurateUrlWithFilters,
  parseUrlWithFilters,
} from './catalog.helpers';

export const useFilters = () => {
  const [_, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(
    parseUrlWithFilters(window.location.search) as IProductFitlers
  );

  // Функции
  function changeFiltersInUrl(newFilters: IProductFitlers) {
    setSearchParams(`?${configurateUrlWithFilters(newFilters)}`);
    setFilters(newFilters);
  }
  // Функции END

  return { filters, changeFiltersInUrl };
};
