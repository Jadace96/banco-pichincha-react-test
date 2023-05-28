// vendors
import { useState } from "react";

// hooks
import { useOutsideClick } from "hooks";

// styles
import styles from "./ThreeDotsMenu.module.css";

export const ThreeDotsMenu: React.FC = () => {
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useOutsideClick<HTMLDivElement>(() => setShowMenu(false));

	return (
		<div className={styles.dotsMenu} ref={menuRef}>
			<div
				className={`${styles.dotsIcon} ${showMenu ? styles.active : ""}`}
				onClick={() => setShowMenu(!showMenu)}
			>
				<span className={styles.dotIcon}></span>
				<span className={styles.dotIcon}></span>
				<span className={styles.dotIcon}></span>
				{showMenu && (
					<div className={styles.optionsMenu}>
						<div className={styles.option}>Editar</div>
						<div className={styles.option}>Eliminar</div>
					</div>
				)}
			</div>
		</div>
	);
};
