// vendors
import { useEffect, useRef, RefObject } from "react";

export const useOutsideClick = <T extends HTMLElement>(
	callback: () => void
): RefObject<T> => {
	const ref = useRef<T>(null);

	const onClick = ({ target }: Event) => {
		if (ref.current && !ref.current.contains(target as Node)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("click", onClick);

		return () => {
			document.removeEventListener("click", onClick);
		};
	}, []);

	return ref;
};
