import dayjs from "dayjs";

import { getDayList } from "../utils";
import Day from "./Day";

interface MonthProps {
  date: string;
  nowDate: string;
  onClick: (date: dayjs.Dayjs) => void;
  startDate: dayjs.Dayjs | null;
  endDate: dayjs.Dayjs | null;
}

export default function Month({
  date,
  nowDate,
  onClick,
  endDate,
  startDate,
}: MonthProps) {
  const dates = getDayList(date);
  const nowMonth = dayjs(nowDate).month();
  const nowYear = dayjs(nowDate).year();
  return (
    <>
      {dates.map((item) => {
        const itemDate = dayjs(item);
        const isCurrMonth =
          itemDate.month() === nowMonth && itemDate.year() === nowYear;
        return (
          <Day
            key={item.toString()}
            date={item.toString()}
            isCurrentMonth={isCurrMonth}
            onClick={onClick}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </>
  );
}
