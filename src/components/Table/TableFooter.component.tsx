// components
import { Selecter } from "components";

// styles
import styles from "./TableFooter.module.css";

// types
type TProps = {
  results: number;
  totalPages: number;
  currentPage: number;
  rowsPerPage: number;
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
};

export const TableFooter = ({
  results,
  totalPages,
  currentPage,
  rowsPerPage,
  setRowsPerPage,
  setCurrentPage,
}: TProps) => {
  const onClickPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const onClickNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  const onSelectOption = (value: string) => setRowsPerPage(Number(value));

  return (
    <div className={styles.tableFooter}>
      <span>{results} Resultados</span>

      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${currentPage === 1 && styles.buttonDisabled}`}
          onClick={onClickPreviousPage}
        >
          <img src="https://www.svgrepo.com/show/67833/left-arrow.svg" />
        </button>

        {currentPage}

        <button
          className={`${styles.button} ${currentPage === totalPages && styles.buttonDisabled}`}
          onClick={onClickNextPage}
          disabled={currentPage === totalPages}
        >
          <img src="https://www.svgrepo.com/show/95912/right-arrow.svg" />
        </button>
      </div>

      <Selecter
        options={[5, 15, 30, 50]}
        selectedValue={rowsPerPage}
        onClickOption={onSelectOption}
      />
    </div>
  );
};
