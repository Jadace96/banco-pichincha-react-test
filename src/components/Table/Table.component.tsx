// vendors
import { ReactNode } from "react";

// components
import { TableFooter } from "./TableFooter.component";

// styles
import styles from "./Table.module.css";

// types
import { TObjectKeyString } from "types";

type TPops = {
  totalProducts: number;
  rows: TObjectKeyString[];
  initialRowsPerPage?: number;
  columns?: ReactNode[];
  totalPages: number;
  currentPage: number;
  rowsPerPage: number;
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
};

export const Table = ({
  rows = [],
  columns = [],
  totalPages,
  currentPage,
  rowsPerPage,
  totalProducts,
  setRowsPerPage,
  setCurrentPage,
}: TPops) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableRowHeader}>
            <tr>
              {columns.map((element) => (
                <th key={Math.random()} className={styles.tableHeader}>
                  {element}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((data: TObjectKeyString) => (
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
        results={totalProducts}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
