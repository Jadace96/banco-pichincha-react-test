// vendors
import { ReactNode } from "react";

// styles
import styles from "./Button.module.css";

// types
type TProps = {
	children: ReactNode;
};

export const Button = ({ children }: TProps) => {
	return <div className={styles.buttonContainer}>{children}</div>;
};
