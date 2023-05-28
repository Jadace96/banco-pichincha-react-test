// types
import { TObjectKeyString } from "types";

type TGetPaginatedData = {
	currentPage?: number;
	rowsPerPage?: number;
	data: TObjectKeyString[];
};

export const getTotalPages = (data: TObjectKeyString[], rowsPerPage = 5) =>
	Math.ceil(data.length / rowsPerPage);

export const getPaginatedData = ({
	data = [],
	currentPage = 1,
	rowsPerPage = 5,
}: TGetPaginatedData) => {
	const start = (currentPage - 1) * rowsPerPage;
	const end = currentPage * rowsPerPage;

	return data.slice(start, end);
};
