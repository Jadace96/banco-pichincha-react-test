// vendors
import { useLocation, useNavigate } from "react-router-dom";

// components
import { ProductForm } from "components";

// constants
import { PATHS } from "consts/paths.const";

// styles
import styles from "./AddEditProduct.module.css";

const pageTitle = {
  [PATHS.EDIT_PRODUCT]: "Formulario de Edicion",
  [PATHS.ADD_PRODUCT]: "Formulario de Registro",
};

export default function AddEditProduct() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.addEditProductContainer}>
      <button onClick={() => navigate(-1)} className={styles.goBackButton}>
        {"< Volver"}
      </button>
      <h1 className={styles.pageTitle}>{pageTitle[location.pathname]}</h1>
      <ProductForm />
    </div>
  );
}
