import {
  Pagination,
  PaginationContent,
  PaginationFirstPage,
  PaginationItem,
  PaginationLastPage,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/shadcn/pagination";
import { IProductQueryData } from "@/types/features/product/query-data.types";

interface ICatalogPaginationProps {
  currentPage: number;
  totalPages: number;
  changeQueryParams: (queryData: IProductQueryData) => void;
}

function CatalogPagination({
  currentPage = 0,
  totalPages = 0,
  changeQueryParams
}: ICatalogPaginationProps) {
  if (!currentPage || !totalPages) return null;

  const pages = getPagesObject();

  // Функции
  function getPagesObject() {
    let result;

    if (currentPage === 1) {
      result = [
        currentPage,
        currentPage + 1 > totalPages ? null : currentPage + 1,
        currentPage + 2 > totalPages ? null : currentPage + 2
      ];
    } else if (currentPage === totalPages) {
      result = [
        currentPage - 2 < 1 ? null : currentPage - 2,
        currentPage - 1 < 1 ? null : currentPage - 1,
        currentPage
      ];
    } else {
      result = [currentPage - 1, currentPage, currentPage + 1];
    }

    return result.filter((el) => el) as number[];
  }
  // Функции END

  return (
    <Pagination>
      <PaginationContent>
        {/* First page button */}
        <PaginationItem>
          <PaginationFirstPage
            onClick={() => changeQueryParams({ page: 1 })}
            className={currentPage - 1 < 1 ? "pointer-events-none opacity-40" : ""}
          />
        </PaginationItem>
        {/* Prev button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => changeQueryParams({ page: currentPage - 1 })}
            className={currentPage - 1 < 1 ? "pointer-events-none opacity-40" : ""}
          />
        </PaginationItem>

        {/* Pages */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              className="cursor-pointer select-none"
              onClick={() => changeQueryParams({ page })}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* Pages END */}

        {/* Next button */}
        <PaginationItem>
          <PaginationNext
            onClick={() => changeQueryParams({ page: currentPage + 1 })}
            className={
              currentPage + 1 > totalPages ? "pointer-events-none opacity-40" : ""
            }
          />
        </PaginationItem>
        {/* Last page button */}
        <PaginationItem>
          <PaginationLastPage
            onClick={() => changeQueryParams({ page: totalPages })}
            className={
              currentPage + 1 > totalPages ? "pointer-events-none opacity-40" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default CatalogPagination;
