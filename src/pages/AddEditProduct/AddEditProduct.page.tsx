// components
import { ProductForm } from "components";

// styles
import styles from "./AddEditProduct.module.css";

export default function AddEditProduct() {
	return (
		<div className={styles.addEditProductContainer}>
			<ProductForm />
		</div>
	);
}
