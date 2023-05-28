// components
import { Button, Searcher, Table, Tooltip } from "components";

// mappers
import { mapProductsToTableRows } from "mappers/products.mapper";

// hooks
import { useProductsTable } from "hooks";

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
	const { currentPageData, ...rest } = useProductsTable();

	return (
		<div className={styles.pageContainer}>
			<div className={styles.headerContainer}>
				<Searcher />
				<Button> Agregar </Button>
			</div>
			<Table
				{...rest}
				colums={columnsData}
				rows={mapProductsToTableRows(currentPageData)}
			/>
		</div>
	);
}
