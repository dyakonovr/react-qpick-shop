import { useSearchParams } from "react-router-dom";
import { configurateUrlParams, parseParamsFromUrl } from "../helpers/catalog.helpers";
import { IProductFitlers } from "@/types/features/product/filters.types";
import { IProductQueryData } from "@/types/features/product/query-data.types";
import { ProductSort } from "@/services/product/product.types";

export const useFilters = () => {
  const [, setSearchParams] = useSearchParams();
  const params = window.location.search.slice(1);
  const { filters, page, searchTerm, sort } = parseParamsFromUrl<IProductQueryData>(
    params,
    {
      tryToParseNumbersInArray: true,
      tryToParseNumbersInObject: true,
      tryToParsePrimitive: true
    }
  );

  console.log("sort after parse:", sort);

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
        sort
      };
    }

    setSearchParams(configurateUrlParams(paramsObject));
  }

  function changePage(newPage: number) {
    setSearchParams(configurateUrlParams({ filters, page: newPage, searchTerm, sort }));
  }

  function changeSort(newSort: ProductSort) {
    setSearchParams(configurateUrlParams({ filters, page, searchTerm, sort: newSort }));
  }
  // Функции END

  return {
    filters: filters || {},
    changeFilters,
    page: page ? +page : 1,
    changePage,
    sort,
    changeSort,
    searchTerm
  };
};
