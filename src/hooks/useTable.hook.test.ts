// vendors
import { renderHook, act } from "@testing-library/react-hooks";

// hooks
import { useTable } from "./useTable.hook";

// utils
import { getPaginatedData, getTotalPages } from "utils";

// mocks
import { mockProducts } from "mocks/mockTableData";

jest.mock("utils", () => ({
  getPaginatedData: jest.fn(),
  getTotalPages: jest.fn(),
}));

describe("useTable", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns the correct initial state", () => {
    const { result } = renderHook(() => useTable(mockProducts));

    expect(result.current.currentPage).toBe(1);
    expect(result.current.rowsPerPage).toBe(5);
    expect(result.current.totalProducts).toBe(mockProducts.length);
  });

  it("updates the current page and rows per page", () => {
    const { result } = renderHook(() => useTable(mockProducts));

    act(() => {
      result.current.setCurrentPage(2);
      result.current.setRowsPerPage(10);
    });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.rowsPerPage).toBe(10);
  });

  it("calls the utils functions with the correct arguments", () => {
    renderHook(() => useTable(mockProducts));

    expect(getPaginatedData).toHaveBeenCalledWith({
      data: mockProducts,
      currentPage: 1,
      rowsPerPage: 5,
    });

    expect(getTotalPages).toHaveBeenCalledWith(mockProducts, 5);
  });
});
