import dayjs from "dayjs";

export const throttle = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) => {
  let timer: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>): void => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
};

export const getDayList = (date: string) => {
  const value = dayjs(date);
  const startOfMonth = value.startOf("month"); // 이번 달의 첫 날
  const endOfMonth = value.endOf("month"); // 이번 달의 마지막 날

  // 1일이 포함된 주의 첫 번째 날짜(일요일)
  const startOfFirstWeek = startOfMonth.startOf("week");

  // 이번 달의 마지막 날이 속한 주의 토요일
  const lastSaturday =
    endOfMonth.day() === 6
      ? endOfMonth
      : endOfMonth.subtract(endOfMonth.day() + 1, "day"); // 마지막 주의 전 주 토요일

  const dates = [];
  let current = startOfFirstWeek;

  while (current.isBefore(lastSaturday) || current.isSame(lastSaturday)) {
    dates.push(current.toDate());
    current = current.add(1, "day");
  }
  return dates;
};
