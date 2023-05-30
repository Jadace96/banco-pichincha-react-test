import { getTotalPages, getPaginatedData } from "./pagination.util";

describe("getTotalPages util test suit", () => {
  it("Should calculate the total number of pages correctly", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rowsPerPage = 5;
    const totalPages = getTotalPages(data, rowsPerPage);

    expect(totalPages).toBe(2);
  });

  it("Should handle an empty data array correctly", () => {
    const data: number[] = [];
    const rowsPerPage = 5;
    const totalPages = getTotalPages(data, rowsPerPage);

    expect(totalPages).toBe(0);
  });

  it("Should use the default rowsPerPage value if not provided", () => {
    const data = [1, 2, 3];
    const totalPages = getTotalPages(data);

    expect(totalPages).toBe(1);
  });
});

describe("getPaginatedData utils test suit", () => {
  it("Should return the correct paginated data", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const currentPage = 2;
    const rowsPerPage = 3;
    const paginatedData = getPaginatedData({ data, currentPage, rowsPerPage });

    expect(paginatedData).toEqual([4, 5, 6]);
  });

  it("Should handle an empty data array correctly", () => {
    const data: number[] = [];
    const currentPage = 1;
    const rowsPerPage = 5;
    const paginatedData = getPaginatedData({ data, currentPage, rowsPerPage });

    expect(paginatedData).toEqual([]);
  });

  it("Should use the default currentPage and rowsPerPage values if not provided", () => {
    const data = [1, 2, 3, 4, 5];
    const paginatedData = getPaginatedData({ data });

    expect(paginatedData).toEqual([1, 2, 3, 4, 5]);
  });
});
