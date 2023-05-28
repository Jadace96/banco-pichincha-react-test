// components
import { Logo } from "components";

// utils
import { capitalizeFirstLetters } from "utils";

// types
import { TProduct } from "types/product.types";

export const mapProductsToTableRows = (products: TProduct[]) => {
	return products.map((product: TProduct) => ({
		logo: <Logo src={product.logo} alt={capitalizeFirstLetters(product.id)} />,
		name: product.name,
		description: product.description,
		date_release: product.date_release.toLocaleDateString(),
		date_revision: product.date_revision.toLocaleDateString(),
	}));
};
