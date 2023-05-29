// vendors
import { useLocation, useNavigate } from "react-router-dom";

// components
import { ProductForm } from "components";

// constants
import { PATHS } from "consts/paths.const";

// styles
import styles from "./AddEditProduct.module.css";
import { formatDate } from "utils";

const pageTitle = {
  [PATHS.EDIT_PRODUCT]: "Formulario de Edicion",
  [PATHS.ADD_PRODUCT]: "Formulario de Registro",
};

export default function AddEditProduct() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const productFormInitialValues =
    {
      ...state?.productData,
      date_release: formatDate(state?.productData.date_release),
      date_revision: formatDate(state?.productData.date_revision),
    } || {};

  return (
    <div className={styles.addEditProductContainer}>
      <button onClick={() => navigate(-1)} className={styles.goBackButton}>
        {"< Volver"}
      </button>
      <h1 className={styles.pageTitle}>{pageTitle[location.pathname]}</h1>
      <ProductForm initialValues={productFormInitialValues} />
    </div>
  );
}
