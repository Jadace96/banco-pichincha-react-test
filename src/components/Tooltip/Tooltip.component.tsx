// styles
import styles from "./Tooltip.module.css";

export const Tooltip = ({ label = "" }) => {
  return (
    <div className={styles.tooltipWrapper}>
      <span className={styles.tooltipLabel}>{label}</span>
      <span className={styles.tooltipContainer}>¡</span>
    </div>
  );
};
