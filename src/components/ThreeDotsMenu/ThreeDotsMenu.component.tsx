// vendors
import { useState } from "react";

// hooks
import { useOutsideClick } from "hooks";

// styles
import styles from "./ThreeDotsMenu.module.css";

// types
type TProps = {
  onClickEdit: () => void;
  onClickDelete: () => void;
};

export const ThreeDotsMenu = ({ onClickEdit, onClickDelete }: TProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useOutsideClick<HTMLDivElement>(() => setShowMenu(false));

  return (
    <div className={styles.dotsMenu} ref={menuRef}>
      <div className={`${styles.dotsIcon} ${showMenu ? styles.active : ""}`} onClick={() => setShowMenu(!showMenu)}>
        <span className={styles.dotIcon}></span>
        <span className={styles.dotIcon}></span>
        <span className={styles.dotIcon}></span>
        {showMenu && (
          <div className={styles.optionsMenu}>
            <button onClick={onClickEdit} className={styles.option}>
              Editar
            </button>
            <button onClick={onClickDelete} className={styles.option}>
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
