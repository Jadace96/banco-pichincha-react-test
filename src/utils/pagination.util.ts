type TGetPaginatedData<TPaginatedDataItem> = {
  currentPage?: number;
  rowsPerPage?: number;
  data: TPaginatedDataItem[];
};

export const getTotalPages = <TDataItem>(data: TDataItem[], rowsPerPage = 5) =>
  Math.ceil(data.length / rowsPerPage);

export const getPaginatedData = <TPaginatedDataItem>({
  data = [],
  currentPage = 1,
  rowsPerPage = 5,
}: TGetPaginatedData<TPaginatedDataItem>) => {
  const start = (currentPage - 1) * rowsPerPage;
  const end = currentPage * rowsPerPage;

  return data.slice(start, end);
};
