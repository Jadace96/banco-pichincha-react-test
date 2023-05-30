// vendors
import { render, screen } from "@testing-library/react";

// components
import { Tooltip } from "./Tooltip.component";

describe("Tooltip component test suit", () => {
  it("Renders tooltip label", () => {
    const label = "Tooltip Label";
    render(<Tooltip label={label} />);

    const tooltipLabel = screen.getByText(label);
    expect(tooltipLabel).toBeInTheDocument();
  });

  it("Renders tooltip container", () => {
    render(<Tooltip />);

    const tooltipContainer = screen.getByText("¡");
    expect(tooltipContainer).toBeInTheDocument();
  });
});
