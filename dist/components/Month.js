import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import dayjs from "dayjs";
import { getDayList } from "../utils";
import Day from "./Day";
export default function Month(_a) {
    var date = _a.date, nowDate = _a.nowDate, onClick = _a.onClick, endDate = _a.endDate, startDate = _a.startDate;
    var dates = getDayList(date);
    var nowMonth = dayjs(nowDate).month();
    var nowYear = dayjs(nowDate).year();
    return (_jsx(_Fragment, { children: dates.map(function (item) {
            var itemDate = dayjs(item);
            var isCurrMonth = itemDate.month() === nowMonth && itemDate.year() === nowYear;
            return (_jsx(Day, { date: item.toString(), isCurrentMonth: isCurrMonth, onClick: onClick, startDate: startDate, endDate: endDate }, item.toString()));
        }) }));
}
