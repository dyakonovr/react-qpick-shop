import { IProductFitlers } from '@/hooks/features/useProducts/filters.types';
import { ProductQueryData } from '@/services/product/product.types';
import { useSearchParams } from 'react-router-dom';
import {
  configurateUrlParams,
  parseParamsFromUrl,
} from '../helpers/catalog.helpers';

export const useFilters = () => {
  const [_, setSearchParams] = useSearchParams();
  const params = window.location.search.slice(1);
  const { filters, page, searchTerm } = parseParamsFromUrl<ProductQueryData>(
    params,
    {
      tryToParseNumbersInArray: true,
      tryToParseNumbersInObject: true,
      tryToParsePrimitive: true,
    }
  );

  // Функции
  function changeFilters(newFilters: IProductFitlers) {
    const isReset = Object.keys(newFilters).length === 0;
    let paramsObject;

    if (isReset) paramsObject = {};
    else {
      paramsObject = {
        page: 1,
        filters: newFilters,
        searchTerm,
      };
    }

    setSearchParams(configurateUrlParams(paramsObject));
  }

  function changePage(newPage: number) {
    setSearchParams(
      configurateUrlParams({ filters, page: newPage, searchTerm })
    );
  }
  // Функции END

  return {
    filters: filters || {},
    changeFilters,
    page: page ? +page : 1,
    changePage,
    searchTerm,
  };
};
