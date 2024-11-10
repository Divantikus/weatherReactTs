export const getDate = (index: number, days: string[]) => {
  const weekday = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  const dayOfTheWeek = weekday[new Date(days[index]).getDay()];
  const dateOfTheMonth = new Date(days[index]).getDate();

  return dayOfTheWeek + " " + dateOfTheMonth;
};
