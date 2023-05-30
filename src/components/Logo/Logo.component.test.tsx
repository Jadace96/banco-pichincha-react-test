// vendors
import { render, screen } from "@testing-library/react";

// component
import { Logo } from "./Logo.component";

describe("Logo component test suit", () => {
  it("Renders image with correct src and alt", () => {
    const mockSrc = "path/to/image.png";
    const mockAlt = "Logo";

    render(<Logo src={mockSrc} alt={mockAlt} />);

    const imageElement = screen.getByAltText(mockAlt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockSrc);
  });
});
