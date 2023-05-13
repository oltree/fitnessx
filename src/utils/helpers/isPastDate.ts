export const isPastDate = (date: Date): boolean => {
  const now = new Date();
  const selectedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const currentDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  return selectedDate < currentDate;
};
