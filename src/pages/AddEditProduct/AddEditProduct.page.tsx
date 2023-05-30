// vendors
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// hooks
import { useProduct } from "hooks";

// utils
import { formatDate } from "utils";

// components
import { ProductForm } from "components";

// constants
import { PATHS } from "consts/paths.const";

// styles
import styles from "./AddEditProduct.module.css";

export default function AddEditProduct() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { createProductMutation, updateProductMutation } = useProduct();

  const isEditPage = location.pathname === PATHS.EDIT_PRODUCT;

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
      <ProductForm
        shouldDisableId={isEditPage}
        onSubmitForm={(data: any) =>
          isEditPage ? updateProductMutation.mutate(data) : createProductMutation.mutate(data)
        }
        initialValues={productFormInitialValues}
      />
    </div>
  );
}
