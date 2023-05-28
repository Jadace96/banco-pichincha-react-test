// vendors
import { useState, useEffect, useMemo } from "react";

// utils
import { getTotalPages, getPaginatedData } from "utils";

// mocks
import { mockProducts } from "mocks/mockTableData";

// types
import { TProduct } from "types";

const data: TProduct[] = mockProducts;

export const useProductsTable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [currentPageData, setCurrentPageData] = useState<TProduct[]>([]);

	useEffect(() => {
		const pageData = getPaginatedData<TProduct>({
			data,
			currentPage,
			rowsPerPage,
		});

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
