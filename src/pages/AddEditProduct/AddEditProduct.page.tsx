// vendors
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// utils
import { formatDate } from "utils";

// components
import { ProductForm } from "components";

// constants
import { PATHS } from "consts/paths.const";

// styles
import styles from "./AddEditProduct.module.css";

export default function AddEditProduct() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const isEditPage = location.pathname === PATHS.EDIT_PRODUCT;

  console.log(state?.productData);

  const productFormInitialValues = useMemo(
    () =>
      state?.productData
        ? {
            ...state?.productData,
            date_release: formatDate(new Date(state?.productData.date_release)),
            date_revision: formatDate(new Date(state?.productData.date_revision)),
          }
        : {},
    [state?.productData]
  );

  return (
    <div className={styles.addEditProductContainer}>
      <button onClick={() => navigate(-1)} className={styles.goBackButton}>
        {"< Volver"}
      </button>
      <h1 className={styles.pageTitle}>
        {isEditPage ? "Formulario de Edicion" : "Formulario de Registro"}
      </h1>
      <ProductForm onSubmitForm={console.log} initialValues={productFormInitialValues} />
    </div>
  );
}
