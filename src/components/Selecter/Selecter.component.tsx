// vendors
import { ChangeEvent } from "react";

// styles
import styles from "./Selecter.module.css";

// types
type TProps = {
  options: number[];
  selectedValue: number;
  onClickOption: (value: string) => void;
};

export const Selecter = ({ options, onClickOption, selectedValue }: TProps) => {
  const onSelectChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    onClickOption(target.value);
  };

  return (
    <select value={selectedValue} onChange={onSelectChange} className={styles.selecter}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
