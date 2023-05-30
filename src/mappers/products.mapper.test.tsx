import { render, screen } from "@testing-library/react";
import { mapProductsToTableRows } from "./products.mapper";

describe("mapProductsToTableRows", () => {
  const products = [
    {
      logo: "logo1.png",
      name: "Product 1",
      description: "Description 1",
      date_release: "2022-01-01T00:00:00.000Z",
      date_revision: "2022-01-01T00:00:00.000Z",
      id: "product1",
    },
    {
      logo: "logo2.png",
      name: "Product 2",
      description: "Description 2",
      date_release: "2022-02-01T00:00:00.000Z",
      date_revision: "2022-02-01T00:00:00.000Z",
      id: "product2",
    },
  ];

  const onClickEditProduct = jest.fn();
  const onClickDeleteProduct = jest.fn();

  it("should map products to table rows correctly", () => {
    render(
      <table>
        <tbody>
          {mapProductsToTableRows({
            products,
            onClickEditProduct,
            onClickDeleteProduct,
          }).map((row, index) => (
            <tr key={index}>
              <td>{row.logo}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.date_release}</td>
              <td>{row.date_revision}</td>
              <td>{row.threeDotsMenu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    const rows = screen.getAllByRole("row");

    expect(rows.length).toBe(products.length);

    rows.forEach((row, index) => {
      const product = products[index];

      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
    });
  });
});
