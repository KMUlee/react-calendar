import dayjs from "dayjs";
interface DatePanelProps {
    years: number[];
    curr: dayjs.Dayjs;
    setCurr: (date: dayjs.Dayjs) => void;
    startDate: dayjs.Dayjs | null;
    endDate: dayjs.Dayjs | null;
    onClick: (date: dayjs.Dayjs) => void;
    isChanged: boolean;
    setIsChanged: (isChanged: boolean) => void;
}
declare const DatePanel: ({ years, curr, setCurr, startDate, endDate, onClick, isChanged, setIsChanged, }: DatePanelProps) => import("react/jsx-runtime").JSX.Element;
export default DatePanel;
