// vendors
import { render, screen, fireEvent } from "@testing-library/react";

// components
import { Button } from "./Button.component";

describe("Button component test suit", () => {
  it("Renders button with correct text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText("Click me");

    expect(buttonElement).toBeInTheDocument();
  });

  it("Applies correct CSS class based on mode prop", () => {
    render(<Button mode="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByText("Secondary Button");

    expect(buttonElement).toHaveClass("secondaryButton");
  });

  it("Calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
