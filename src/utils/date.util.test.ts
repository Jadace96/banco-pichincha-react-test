// utils
import { formatDate } from "./date.util";

describe("date util test suit", () => {
  it("Should format the date correctly", () => {
    const date = new Date("2023-05-29T00:00:00.000Z");
    const formattedDate = formatDate(date);

    expect(formattedDate).toBe("2023-05-29");
  });

  it("Should return the current date when no date is provided", () => {
    const currentDate = new Date().toISOString().substring(0, 10);
    const formattedDate = formatDate();

    expect(formattedDate).toBe(currentDate);
  });
});
