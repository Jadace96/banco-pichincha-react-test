// vendors
import { useNavigate } from "react-router-dom";

// components
import { Button, Searcher, Table, Tooltip } from "components";

// mappers
import { mapProductsToTableRows } from "mappers/products.mapper";

// hooks
import { useProductsTable } from "hooks";

// constants
import { PATHS } from "consts/paths.const";

// styles
import styles from "./Products.module.css";

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
  const { currentPageData, ...rest } = useProductsTable();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <Searcher />
        <Button onClick={() => navigate(PATHS.ADD_PRODUCT)}> Agregar </Button>
      </div>
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
          onClickDeleteProduct: () => {},
        })}
      />{" "}
    </div>
  );
}
