// components
import { Button, Searcher, Table, Tooltip } from "components";

// mappers
import { mapProductsToTableRows } from "mappers/products.mapper";

// styles
import styles from "./Products.module.css";

const mockTableData = [
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 1",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd1",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 2",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd2",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 3",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd3",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 4",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd4",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 5",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd5",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 6",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd6",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 7",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd7",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 8",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd8",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 9",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd9",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 10",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd10",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 11",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd11",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 12",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd12",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 13",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd13",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 14",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd14",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 15",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd15",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 16",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd16",
	},
	{
		logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
		name: "Tarjetas de Credito 17",
		description: "Tarjeta de consumo bajo la modalidad de credito",
		date_release: new Date("2023-02-01"),
		date_revision: new Date("2024-02-01"),
		id: "trj-crd17",
	},
];

const columnsData = [
	"Logo",
	"Nombre del producto",
	<Tooltip label="Descripción" />,
	<Tooltip label="Fecha de liberación" />,
	<Tooltip label="Fecha de reestructuración" />,
];

export default function ProductsPage() {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.headerContainer}>
				<Searcher />
				<Button> Agregar</Button>
			</div>
			<Table
				colums={columnsData}
				rows={mapProductsToTableRows(mockTableData)}
			/>
		</div>
	);
}
