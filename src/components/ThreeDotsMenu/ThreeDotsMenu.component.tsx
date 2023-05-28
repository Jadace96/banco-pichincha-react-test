// vendors
import { useState, useEffect, useRef } from "react";

// styles
import styles from "./ThreeDotsMenu.module.css";

export const ThreeDotsMenu: React.FC = () => {
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		setShowMenu(!showMenu);
	};

	const handleOutsideClick = (event: Event) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setShowMenu(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<div className={styles.dotsMenu} ref={menuRef}>
			<div
				className={`${styles.dotsIcon} ${showMenu ? styles.active : ""}`}
				onClick={handleClick}
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
