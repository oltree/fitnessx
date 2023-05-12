export const isPastDate = (date: Date): boolean => {
  const selectedDate = new Date(date);
  const currentDate = new Date();

  return selectedDate < currentDate;
};
