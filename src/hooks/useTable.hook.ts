// vendors
import { useState, useEffect, useMemo } from "react";

// utils
import { getTotalPages, getPaginatedData } from "utils";

// types
import { TObjectKeyString } from "types";

export const useTable = (data: TObjectKeyString[]) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [currentPageData, setCurrentPageData] = useState<TObjectKeyString[]>(
		[]
	);

	useEffect(() => {
		const pageData = getPaginatedData({ data, currentPage, rowsPerPage });

		setCurrentPageData(pageData);
	}, [data, rowsPerPage, currentPage]);

	const totalPages = useMemo(
		() => getTotalPages(data, rowsPerPage),
		[data, rowsPerPage, currentPage]
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
		setRowsPerPage: onRowsPerPagesChange,
	};
};
