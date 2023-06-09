// vendors
import { useState, useMemo } from "react";

// utils
import { getTotalPages, getPaginatedData } from "utils";

export const useTable = <TDataItem>(data: TDataItem[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const currentPageData: TDataItem[] = useMemo(
    () =>
      getPaginatedData<TDataItem>({
        data,
        currentPage,
        rowsPerPage,
      }),
    [data, rowsPerPage, currentPage]
  );

  const totalPages = useMemo(
    () => getTotalPages<TDataItem>(data, rowsPerPage),
    [data, rowsPerPage]
  );

  const onRowsPerPagesChange = (perPage: number) => {
    setCurrentPage(1);
    setRowsPerPage(perPage);
  };

  return {
    totalPages,
    currentPage,
    rowsPerPage,
    currentPageData,
    setCurrentPage,
    totalProducts: data.length,
    setRowsPerPage: onRowsPerPagesChange,
  };
};
