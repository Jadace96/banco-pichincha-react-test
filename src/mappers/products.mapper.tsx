// components
import { Logo, ThreeDotsMenu } from "components";

// utils
import { capitalizeFirstLetters } from "utils";

// types
import { TProduct } from "types/product.types";

type TProps = {
  products: TProduct[];
  onClickDeleteProduct: (id: string) => void;
  onClickEditProduct: (product: TProduct) => void;
};

export const mapProductsToTableRows = ({
  products,
  onClickEditProduct,
  onClickDeleteProduct,
}: TProps) => {
  return products.map((product: TProduct) => ({
    logo: <Logo src={product.logo} alt={capitalizeFirstLetters(product.id)} />,
    name: product.name,
    description: product.description,
    date_release: new Date(product.date_release).toLocaleDateString(),
    date_revision: new Date(product.date_release).toLocaleDateString(),
    threeDotsMenu: (
      <ThreeDotsMenu
        onClickEdit={() => onClickEditProduct(product)}
        onClickDelete={() => onClickDeleteProduct(product.id)}
      />
    ),
  }));
};
