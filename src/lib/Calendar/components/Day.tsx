import { useMemo } from "react";
import dayjs from "dayjs";

interface DayProps {
  date: string;
  isCurrentMonth: boolean;
  onClick: (date: dayjs.Dayjs) => void;
  startDate: dayjs.Dayjs | null;
  endDate: dayjs.Dayjs | null;
}

export default function Day({
  date,
  isCurrentMonth,
  onClick,
  startDate,
  endDate,
}: DayProps) {
  const value = dayjs(date);
  const day = value.date();
  const isToday = value.isSame(dayjs(), "day");
  const isOver = value.isAfter(dayjs(), "day");

  const isBeforeStartDate =
    !endDate && startDate !== null ? value.isBefore(startDate) : false;
  const isBetween =
    startDate &&
    endDate &&
    !value.isSame(endDate, "day") &&
    value.isAfter(startDate) &&
    value.isBefore(endDate);
  const isSameStartDate = startDate && value.isSame(startDate, "day");
  const isSameEndDate = endDate && value.isSame(endDate, "day");

  const getBackground = useMemo(() => {
    // default
    if (!startDate || !endDate) return ""; // non selected date
    if (!isBetween && !isSameStartDate && !isSameEndDate) return ""; // not between date
    if (startDate.isSame(endDate, "day")) return ""; // if start date and end date is same

    if (isSameStartDate) {
      return "linear-gradient(to left, #616161 50%, transparent 50%)";
    }
    if (isSameEndDate) {
      return "linear-gradient(to right, #616161 50%, transparent 50%)";
    }
    if (value.day() === 0) {
      return "linear-gradient(to left, #616161 50%, transparent 50%)";
    }
    if (value.day() === 6) {
      return "linear-gradient(to right, #616161 50%, transparent 50%)";
    }
    return "";
  }, [isSameEndDate, isSameStartDate, value, isBetween, startDate, endDate]);

  return (
    <div
      className={`flex w-full items-center justify-center ${
        isBetween && value.day() !== 0 && value.day() !== 6 ? "bg-bg-gray" : ""
      } `}
      style={{
        background: getBackground,
      }}
    >
      <button
        type="button"
        className={`h-8 w-8 rounded-full ${
          isToday ? "border-[2px] border-primary-500" : ""
        } ${
          isBeforeStartDate || !isCurrentMonth || isOver
            ? "text-neutral-500"
            : "text-white"
        } text-body2`}
        style={{
          backgroundColor:
            // eslint-disable-next-line
            value.isSame(startDate, "day") || value.isSame(endDate, "day")
              ? "#008fff"
              : isBetween && (value.day() === 0 || value.day() === 6)
              ? "#616161"
              : "",
        }}
        onClick={() => onClick(value)}
        disabled={isBeforeStartDate || !isCurrentMonth || isOver}
      >
        {day}
      </button>
    </div>
  );
}
