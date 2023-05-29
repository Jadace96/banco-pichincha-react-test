// vendors
import { Route, Routes as Router, Navigate } from "react-router-dom";

// pages
import { PageNotFound, ProductsPage, AddEditProductPage } from "pages";

// constants
import { PATHS } from "consts/paths.const";

export const Routes = () => {
  return (
    <Router>
      <Route path={PATHS.ROOT} element={<Navigate to={PATHS.PRODUCTS} />} />
      <Route path={PATHS.PRODUCTS} element={<ProductsPage />} />
      <Route path={PATHS.ADD_PRODUCT} element={<AddEditProductPage />} />
      <Route path={PATHS.EDIT_PRODUCT} element={<AddEditProductPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Router>
  );
};
