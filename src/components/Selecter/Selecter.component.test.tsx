// vendors
import { render, screen, fireEvent } from "@testing-library/react";

// components
import { Selecter } from "./Selecter.component";

describe("Selecter component test suit", () => {
  it("Triggers onClickOption event with selected value", () => {
    const onClickOptionMock = jest.fn();
    const options = [1, 2, 3];
    const selectedValue = 2;

    render(
      <Selecter options={options} onClickOption={onClickOptionMock} selectedValue={selectedValue} />
    );

    const selectElement = screen.getByRole("combobox");
    const selectedOption = options[selectedValue - 1];

    fireEvent.change(selectElement, { target: { value: selectedOption.toString() } });

    expect(onClickOptionMock).toHaveBeenCalledTimes(1);
    expect(onClickOptionMock).toHaveBeenCalledWith(selectedOption.toString());
  });
});
