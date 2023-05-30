// types
import { TProduct } from "types";

type TFilterProducts = {
  value: string;
  products: TProduct[];
  filterBy?: "id" | "name";
};

export const filterProducts = ({
  value,
  products = [],
  filterBy = "name",
}: TFilterProducts): TProduct[] => {
  const pattern = new RegExp(value, "i");
  return products.filter((product) => pattern.test(product[filterBy]));
};
