// vendors
import { ReactNode } from "react";

// hooks
import { useTable } from "hooks";

// components
import { TableFooter } from "./TableFooter.component";

// styles
import styles from "./Table.module.css";

// types
import { TObjectKeyString } from "types";

type TPops = {
	rows: TObjectKeyString[];
	initialRowsPerPage?: number;
	colums?: ReactNode[];
};

export const Table = ({ rows = [], colums = [] }: TPops) => {
	const {
		totalPages,
		currentPage,
		rowsPerPage,
		setRowsPerPage,
		setCurrentPage,
		currentPageData,
	} = useTable(rows);

	return (
		<div className={styles.wrapper}>
			<div className={styles.tableContainer}>
				<table className={styles.table}>
					<thead className={styles.tableRowHeader}>
						<tr>
							{colums.map((element) => (
								<th key={Math.random()} className={styles.tableHeader}>
									{element}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{currentPageData.map((data: TObjectKeyString) => (
							<tr key={Math.random()} className={styles.tableRowItems}>
								{Object.values(data).map((value) => (
									<td key={Math.random()} className={styles.tableCell}>
										<>{value}</>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<TableFooter
				totalPages={totalPages}
				currentPage={currentPage}
				rowsPerPage={rowsPerPage}
				setRowsPerPage={setRowsPerPage}
				setCurrentPage={setCurrentPage}
				results={currentPageData?.length}
			/>
		</div>
	);
};
