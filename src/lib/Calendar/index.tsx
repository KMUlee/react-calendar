import { useState } from "react";
import DatePanel from "./components/DatePanel";
import dayjs from "dayjs";
import { MonthSelector, YearSelector } from "./components/Selector";
import useOutsideClick from "./hooks/useOutsideClick";
import ArrowDownIcon from "./assets/icons/ArrowDownIcon";

interface HeaderProps {
  years: number[];
  curr: dayjs.Dayjs;
  setCurr: (date: dayjs.Dayjs) => void;
  setIsChanged: (isChanged: boolean) => void;
}

interface CalendarProps {
  years: number[];
  startDate: dayjs.Dayjs | null;
  endDate: dayjs.Dayjs | null;
  onClick: (date: dayjs.Dayjs) => void;
}

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

const Header = ({ years, curr, setCurr, setIsChanged }: HeaderProps) => {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const [openYear, setOpenYear] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);
  const monthRef = useOutsideClick(() => setOpenMonth(false));
  const yearRef = useOutsideClick(() => setOpenYear(false));

  return (
    <div className="flex items-center justify-start w-full gap-2">
      <div
        className="relative cursor-pointer gap-[2px] rounded-md text-neutral-50 flex-center"
        onClick={() => setOpenYear(!openYear)}
        role="presentation"
        ref={yearRef}
      >
        <p className="text-subhead1 md:text-h3">{curr.year()}년</p>
        <button type="button" aria-label="button-down">
          <ArrowDownIcon width={20} height={20} />
        </button>
        <YearSelector
          years={years}
          open={openYear}
          setOpen={setOpenYear}
          onSelect={(year: number) => {
            setCurr(curr.set("year", year));
            setIsChanged(true);
          }}
          closeDropdown={() => {
            setOpenYear(false);
          }}
        />
      </div>
      <div
        className="relative cursor-pointer gap-[2px] rounded-md text-neutral-50 flex-center"
        onClick={() => setOpenMonth(!openMonth)}
        role="presentation"
        ref={monthRef}
      >
        <p className="text-subhead1 md:text-h3">{curr.month() + 1}월</p>
        <button className="w-5 h-5" type="button" aria-label="button-down">
          <ArrowDownIcon width={20} height={20} />
        </button>
        <MonthSelector
          months={months}
          open={openMonth}
          setOpen={setOpenMonth}
          onSelect={(month: number) => {
            setCurr(curr.set("month", month - 1));
            setIsChanged(true);
          }}
        />
      </div>
    </div>
  );
};

const Calendar = ({ years, startDate, endDate, onClick }: CalendarProps) => {
  const [curr, setCurr] = useState(endDate ? endDate : dayjs());
  const [isChanged, setIsChanged] = useState(true);

  return (
    <div className="flex flex-col w-full">
      <Header
        years={years}
        curr={curr}
        setCurr={setCurr}
        setIsChanged={setIsChanged}
      />
      <div className="grid w-full grid-cols-7 py-2 text-white">
        {DAYS.map((day) => (
          <div className="flex items-center justify-center w-full">
            <p className="text-body2-bold">{day}</p>
          </div>
        ))}
      </div>
      <DatePanel
        years={years}
        curr={curr}
        setCurr={setCurr}
        onClick={onClick}
        startDate={startDate}
        endDate={endDate}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
    </div>
  );
};

export default Calendar;
