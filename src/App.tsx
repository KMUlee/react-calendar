import { useState } from "react";
import Calendar from "./lib/Calendar";
import dayjs from "dayjs";

const YEARS = [2021, 2022, 2023, 2024, 2025];

function App() {
  const [state, setState] = useState<{
    startDate: dayjs.Dayjs | null;
    endDate: dayjs.Dayjs | null;
  }>({ startDate: null, endDate: null });

  const handleStartDate = (date: dayjs.Dayjs | null) => {
    setState((prev) => ({ ...prev, startDate: date }));
  };

  const handleEndDate = (date: dayjs.Dayjs | null) => {
    setState((prev) => ({ ...prev, endDate: date }));
  };

  const handleOnClick = (date: dayjs.Dayjs) => {
    if (state.startDate !== null) {
      if (state.endDate) {
        handleStartDate(date);
        handleEndDate(null);
      } else {
        handleEndDate(date);
      }
    } else {
      handleStartDate(date);
      handleEndDate(null);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-svh">
      <div className="p-2 w-96 bg-bg-darkgray">
        <Calendar
          years={YEARS}
          startDate={state.startDate}
          endDate={state.endDate}
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
}

export default App;
