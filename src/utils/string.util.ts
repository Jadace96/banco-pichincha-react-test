export const capitalizeFirstLetters = (value: string) =>
	value
		.split("-")
		.reduce((result, word) => result + word.charAt(0).toUpperCase(), "");
