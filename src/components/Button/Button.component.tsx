// vendors
import { ButtonHTMLAttributes } from "react";

// styles
import styles from "./Button.module.css";

// types
type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: "primary" | "secondary";
};

const modesStyles = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
};

export const Button = ({ children, className = "", mode = "primary", ...rest }: TProps) => {
  return (
    <button
      className={`${styles.buttonContainer} ${className} ${
        modesStyles[mode] || modesStyles.primary
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
