import {
  Pagination,
  PaginationContent,
  PaginationFirstPage,
  PaginationItem,
  PaginationLastPage,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type CatalogPaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (newPage: number) => void;
};

function CatalogPagination({
  currentPage = 0,
  totalPages = 0,
  setCurrentPage,
}: CatalogPaginationProps) {
  if (!currentPage || !totalPages) return null;

  const pages = getPagesObject();

  // Функции
  function getPagesObject() {
    let result;

    if (currentPage === 1) {
      result = [
        currentPage,
        currentPage + 1 > totalPages ? null : currentPage + 1,
        currentPage + 2 > totalPages ? null : currentPage + 2,
      ];
    }

    else if (currentPage === totalPages) {
      result = [
        currentPage - 2 < 1 ? null : currentPage - 2,
        currentPage - 1 < 1 ? null : currentPage - 1,
        currentPage,
      ];
    }

    else {
      result = [currentPage - 1, currentPage, currentPage + 1];
    }

    return result.filter(el => el) as number[];
  }
  // Функции END

  return (
    <Pagination>
      <PaginationContent>
        {/* First page button */}
        <PaginationItem>
          <PaginationFirstPage
            onClick={() => setCurrentPage(1)}
            className={
              currentPage - 1 < 1 ? 'pointer-events-none opacity-40' : ''
            }
          />
        </PaginationItem>
        {/* Prev button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setCurrentPage(currentPage - 1)}
            className={
              currentPage - 1 < 1 ? 'pointer-events-none opacity-40' : ''
            }
          />
        </PaginationItem>

        {/* Pages */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              className="cursor-pointer select-none"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* Pages END */}

        {/* Next button */}
        <PaginationItem>
          <PaginationNext
            onClick={() => setCurrentPage(currentPage + 1)}
            className={
              currentPage + 1 > totalPages
                ? 'pointer-events-none opacity-40'
                : ''
            }
          />
        </PaginationItem>
        {/* Last page button */}
        <PaginationItem>
          <PaginationLastPage
            onClick={() => setCurrentPage(totalPages)}
            className={
              currentPage + 1 > totalPages
                ? 'pointer-events-none opacity-40'
                : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default CatalogPagination;
