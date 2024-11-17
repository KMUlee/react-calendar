import dayjs from "dayjs";
import { getDayList, throttle } from "../utils";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import Month from "./Month";

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

const DatePanel = ({
  years,
  curr,
  setCurr,
  startDate,
  endDate,
  onClick,
  isChanged,
  setIsChanged,
}: DatePanelProps) => {
  // ref
  const scrollRef = useRef<HTMLDivElement>(null);
  // vars
  const yearList = useMemo(
    () => [...years, years[years.length - 1] + 1],
    [years]
  ); // add one more year for the last month(December)

  const virtualizer = useVirtualizer({
    count: years.length * 12 + 1, // 12 months * years + 1 for the last month and index is the number of months
    getScrollElement: () => scrollRef.current,
    estimateSize: (index) => {
      const year = yearList[index > 0 ? Math.floor(index / 12) : 0];
      const month = (index % 12) + 1;
      const weeks = Math.ceil(getDayList(`${year}-${month}-01`).length / 7);
      const gaps = weeks - 1;
      return weeks * 32 + gaps * 4;
    },
    overscan: 0, // to reduce calculation error
    gap: 4,
  });

  const items = virtualizer.getVirtualItems();

  // Scroll to the index on mount and when the current date changes
  useCallback(() => {
    if (virtualizer && isChanged) {
      const today = curr;
      const currentYear = today.year();
      const currentMonth = today.month();
      const startYearIndex = yearList.indexOf(currentYear) * 12;
      const todayIndex = startYearIndex + currentMonth;
      virtualizer.scrollToIndex(todayIndex, { align: "start" });
      setIsChanged(false);
    }
  }, [virtualizer, isChanged, curr, setIsChanged, yearList])();

  // Handle scroll event
  const handleScroll = throttle(() => {
    const currIndex = items[Math.floor(items.length / 2) || 0]?.index || 0;
    const year = yearList[currIndex > 0 ? Math.floor(currIndex / 12) : 0];
    const month = (currIndex % 12) + 1;

    const scrollTop = scrollRef.current?.scrollTop;

    if (scrollTop === 0) {
      setCurr(dayjs(`${yearList[0]}-01-01`));
    } else {
      setCurr(dayjs(`${year}-${month}-01`));
    }
  }, 150);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className="flex w-full overflow-y-scroll scrollbar-hide h-60"
      ref={scrollRef}
    >
      <div
        className="relative flex flex-col w-full"
        style={{
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        {items.map((item) => (
          <div
            className="absolute grid w-full grid-cols-7 gap-y-1"
            style={{
              height: `${item.size}px`,
              transform: `translateY(${item.start}px)`,
            }}
            ref={virtualizer.measureElement}
            key={item.key}
          >
            <Month
              date={`${yearList[Math.floor(item.index / 12)]}-${
                (item.index % 12) + 1
              }-01`}
              startDate={startDate}
              endDate={endDate}
              nowDate={curr.format("YYYY-MM-DD")}
              onClick={onClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePanel;
