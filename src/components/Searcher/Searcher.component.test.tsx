// vendors
import { render, screen, fireEvent } from "@testing-library/react";

// component
import { Searcher } from "./Searcher.component";

describe("Searcher component test suit", () => {
  it("Renders correctly", () => {
    render(<Searcher onChangeValue={jest.fn()} />);

    const searchInput = screen.getByRole("searchbox");

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "search");
    expect(searchInput).toHaveAttribute("placeholder", "Search...");
  });

  it("Triggers onChangeValue event with correct value", () => {
    const onChangeValueMock = jest.fn();
    const placeholderText = "Search...";

    render(<Searcher onChangeValue={onChangeValueMock} placeholder={placeholderText} />);

    const searchInput = screen.getByPlaceholderText(placeholderText);
    const searchTerm = "example search term";

    fireEvent.change(searchInput, { target: { value: searchTerm } });

    expect(onChangeValueMock).toHaveBeenCalledTimes(1);
    expect(onChangeValueMock).toHaveBeenCalledWith(searchTerm);
  });
});
