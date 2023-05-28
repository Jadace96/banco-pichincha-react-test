// types
type TProps = React.InputHTMLAttributes<HTMLInputElement>;

// styles
import styles from "./Searcher.module.css";

export const Searcher = (props: TProps) => {
	return <input className={styles.searchInput} type="search" {...props} />;
};
