// vendors
import { useNavigate } from "react-router-dom";

// components
import { Button, Searcher, Table, Tooltip } from "components";

// mappers
import { mapProductsToTableRows } from "mappers/products.mapper";

// hooks
import { useProduct, useTable } from "hooks";

// constants
import { PATHS } from "consts/paths.const";

// types
import { TProduct } from "types";

// styles
import styles from "./Products.module.css";
import { useEffect } from "react";

const columnsData = [
  "Logo",
  "Nombre del producto",
  <Tooltip label="Descripción" />,
  <Tooltip label="Fecha de liberación" />,
  <Tooltip label="Fecha de reestructuración" />,
  "",
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const { products, fetchProducts, isFetchingProducts, deleteProductMutation } = useProduct();
  const { currentPageData, ...rest } = useTable<TProduct>(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <Searcher />
        <Button onClick={() => navigate(PATHS.ADD_PRODUCT)}> Agregar </Button>
      </div>
      {isFetchingProducts ? (
        <div>Loading Products...</div>
      ) : (
        <Table
          {...rest}
          colums={columnsData}
          rows={mapProductsToTableRows({
            products: currentPageData,
            onClickEditProduct: (productToEdit) =>
              navigate(PATHS.EDIT_PRODUCT, {
                state: {
                  productData: productToEdit,
                },
              }),
            onClickDeleteProduct: deleteProductMutation.mutate,
          })}
        />
      )}
    </div>
  );
}
