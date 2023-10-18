export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('default', { year: "numeric", month: "long", day: "numeric" }).format(date);
};