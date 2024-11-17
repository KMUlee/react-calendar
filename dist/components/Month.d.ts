import dayjs from "dayjs";
interface MonthProps {
    date: string;
    nowDate: string;
    onClick: (date: dayjs.Dayjs) => void;
    startDate: dayjs.Dayjs | null;
    endDate: dayjs.Dayjs | null;
}
export default function Month({ date, nowDate, onClick, endDate, startDate, }: MonthProps): import("react/jsx-runtime").JSX.Element;
export {};
