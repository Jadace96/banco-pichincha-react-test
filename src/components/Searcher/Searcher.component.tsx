// types
type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChangeValue: (value: string) => void;
};

// styles
import styles from "./Searcher.module.css";

export const Searcher = ({ onChangeValue, ...rest }: TProps) => {
  return (
    <input
      className={styles.searchInput}
      placeholder="Search..."
      {...rest}
      type="search"
      onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => onChangeValue(target.value)}
    />
  );
};
