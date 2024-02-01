import { IProductFitlers } from '@/hooks/features/useProducts/filters.types';
import { ProductQueryData } from '@/services/product/product.types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { configurateUrlParams, parseParamsFromUrl } from './catalog.helpers';

export const useFilters = () => {
  const [_, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<IProductFitlers>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const params = window.location.search.slice(1);
    if (!params) return;

    const queryData = parseParamsFromUrl<ProductQueryData>(params, {
      tryToParseNumbersInArray: true,
      tryToParseNumbersInObject: true,
      tryToParsePrimitive: true,
    });
    setFilters(queryData?.filters || {});
    setPage(queryData?.page ? +queryData.page : 1);
    setSearchTerm(queryData.searchTerm || '');
  }, []);

  // Функции
  function changeFilters(newFilters: IProductFitlers) {
    const isReset = Object.keys(newFilters).length === 0;
    let objectToServer: ProductQueryData = { page: 1 };

    if (!isReset) {
      objectToServer = {
        ...objectToServer,
        filters: newFilters,
        searchTerm,
      }; 
    } else setSearchTerm('');

    setSearchParams(configurateUrlParams(objectToServer));
    setFilters(newFilters);
    setPage(1);
  }

  function changePage(newPage: number) {
    setSearchParams(
      configurateUrlParams({ filters, page: newPage, searchTerm })
    );
    setPage(newPage);
  }
  // Функции END

  return { filters, changeFilters, page, changePage, searchTerm };
};
