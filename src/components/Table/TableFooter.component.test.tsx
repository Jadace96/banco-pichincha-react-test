// vendors
import { fireEvent, screen, render } from "@testing-library/react";

// components
import { TableFooter } from "./TableFooter.component";

describe("TableFooter component test suit", () => {
  it("Renders the correct number of results", () => {
    const results = 10;
    render(
      <TableFooter
        results={results}
        totalPages={1}
        currentPage={1}
        rowsPerPage={10}
        setCurrentPage={() => {}}
        setRowsPerPage={() => {}}
      />
    );

    const resultsText = screen.getByText(`${results} Resultados`);
    expect(resultsText).toBeInTheDocument();
  });

  it("Calls the setCurrentPage function when the previous button is clicked", () => {
    const setCurrentPageMock = jest.fn();
    render(
      <TableFooter
        results={10}
        totalPages={2}
        currentPage={2}
        rowsPerPage={10}
        setCurrentPage={setCurrentPageMock}
        setRowsPerPage={() => {}}
      />
    );

    const previousButton = screen.getByAltText("previous page button");
    fireEvent.click(previousButton);

    expect(setCurrentPageMock).toHaveBeenCalledWith(1);
  });

  it("Calls the setCurrentPage function when the next button is clicked", () => {
    const setCurrentPageMock = jest.fn();
    render(
      <TableFooter
        results={10}
        totalPages={2}
        currentPage={1}
        rowsPerPage={10}
        setCurrentPage={setCurrentPageMock}
        setRowsPerPage={() => {}}
      />
    );

    const nextButton = screen.getByAltText("next page button");
    fireEvent.click(nextButton);

    expect(setCurrentPageMock).toHaveBeenCalledWith(2);
  });

  it("Calls the setRowsPerPage function when an option is selected", () => {
    const setRowsPerPageMock = jest.fn();
    render(
      <TableFooter
        results={10}
        totalPages={1}
        currentPage={1}
        rowsPerPage={10}
        setCurrentPage={() => {}}
        setRowsPerPage={setRowsPerPageMock}
      />
    );

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "15" } });

    expect(setRowsPerPageMock).toHaveBeenCalledWith(15);
  });
});
