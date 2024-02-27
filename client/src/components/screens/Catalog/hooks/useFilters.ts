import { useSearchParams } from "react-router-dom";
import { configurateUrlParams, parseParamsFromUrl } from "../helpers/catalog.helpers";
import type { IProductQueryData } from "@/types/features/product/query-data.types";

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

  // Функции
  function changeQueryParams(queryData: IProductQueryData) {
    if (Object.keys(queryData).length === 0) {
      return setSearchParams(configurateUrlParams({ searchTerm, sort }));
    }

    const result: IProductQueryData = {};

    result.filters = queryData.filters ?? filters;
    result.searchTerm = queryData.searchTerm ?? searchTerm;
    result.page =
      (queryData.filters && Object.keys(queryData.filters).length !== 0) || queryData.sort
        ? 1
        : queryData.page ?? page;
    result.sort = queryData.sort ?? sort;

    setSearchParams(configurateUrlParams(result));
  }
  // Функции END

  return {
    filters: filters || {},
    page: page ? +page : 1,
    sort,
    searchTerm,
    changeQueryParams
  };
};
