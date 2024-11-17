import dayjs from "dayjs";
interface CalendarProps {
    years: number[];
    startDate: dayjs.Dayjs | null;
    endDate: dayjs.Dayjs | null;
    onClick: (date: dayjs.Dayjs) => void;
}
declare const Calendar: ({ years, startDate, endDate, onClick }: CalendarProps) => import("react/jsx-runtime").JSX.Element;
export default Calendar;
