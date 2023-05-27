// vendors
import { render, screen } from "@testing-library/react";

// components
import App from "./App";

test("renders app element", () => {
	render(<App />);
	const appElement = screen.getByText(/app/i);
	expect(appElement).toBeInTheDocument();
});
