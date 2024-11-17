import dayjs from "dayjs";
interface DayProps {
    date: string;
    isCurrentMonth: boolean;
    onClick: (date: dayjs.Dayjs) => void;
    startDate: dayjs.Dayjs | null;
    endDate: dayjs.Dayjs | null;
}
export default function Day({ date, isCurrentMonth, onClick, startDate, endDate, }: DayProps): import("react/jsx-runtime").JSX.Element;
export {};
