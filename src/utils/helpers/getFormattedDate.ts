export const getFormattedDate = (date?: Date): string => {
	const selectedDate = date || new Date();

	return selectedDate.toISOString().replace('T', ' ').slice(0, 10);
};
