// styles
import styles from "./Logo.module.css";

// types
type TProps = {
  src: string;
  alt: string;
};

export const Logo = ({ src, alt }: TProps) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} alt={alt} className={styles.logoImg} />
    </div>
  );
};
