// vendors
import { Route, Routes as Router, Navigate } from "react-router-dom";

// pages
import { PageNotFound, ProductsPage } from "pages";

// constants
import { PATHS } from "consts/paths.const";

export const Routes = () => {
	return (
		<Router>
			<Route path={PATHS.ROOT} element={<Navigate to={PATHS.PRODUCTS} />} />
			<Route path={PATHS.PRODUCTS} element={<ProductsPage />} />
			<Route path="*" element={<PageNotFound />} />
		</Router>
	);
};
