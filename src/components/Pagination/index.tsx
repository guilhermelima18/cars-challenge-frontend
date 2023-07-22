import { PaginationItem } from "./PaginationItem";
import { generatePagesArray } from "../../helpers/functions/generatePagesArray";
import { PaginationProps } from "./types";
import styles from "./styles.module.css";

const siblingsCount = 1;

export const Pagination = ({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <div className={styles.wrapperPagination}>
      <div>
        <strong>{currentPage}</strong> - <strong>{registerPerPage}</strong> de{" "}
        <strong>{totalCountOfRegisters}</strong>
      </div>
      <div className={styles.paginationNumber}>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <h2 className={styles.paginationSpacing}>...</h2>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <h2 className={styles.paginationSpacing}>...</h2>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </div>
    </div>
  );
};
