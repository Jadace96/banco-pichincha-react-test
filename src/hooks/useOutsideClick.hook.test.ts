// eslint-disable-next-line
// @ts-nocheck

// vendors
import { renderHook } from "@testing-library/react-hooks";

// hooks
import { useOutsideClick } from "./useOutsideClick.hook";

describe("useOutsideClick hook test suit", () => {
  it("Calls the callback function when clicking outside the ref element", () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useOutsideClick(callback));

    // Create a mock DOM element
    const refElement = document.createElement("div");
    const outsideElement = document.createElement("div");
    document.body.appendChild(refElement);
    document.body.appendChild(outsideElement);

    // Assign the mock DOM element to the ref
    result.current.current = refElement;

    // Simulate a click outside the ref element
    outsideElement.click();

    expect(callback).toHaveBeenCalled();

    // Clean up the mock DOM elements
    document.body.removeChild(refElement);
    document.body.removeChild(outsideElement);
  });

  it("Does not call the callback function when clicking inside the ref element", () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useOutsideClick(callback));

    // Create a mock DOM element
    const refElement = document.createElement("div");
    document.body.appendChild(refElement);

    // Assign the mock DOM element to the ref
    result.current.current = refElement;

    // Simulate a click inside the ref element
    refElement.click();

    expect(callback).not.toHaveBeenCalled();

    // Clean up the mock DOM element
    document.body.removeChild(refElement);
  });
});
