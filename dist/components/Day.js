var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import dayjs from "dayjs";
export default function Day(_a) {
    var date = _a.date, isCurrentMonth = _a.isCurrentMonth, onClick = _a.onClick, startDate = _a.startDate, endDate = _a.endDate;
    var value = dayjs(date);
    var day = value.date();
    var isToday = value.isSame(dayjs(), "day");
    var isOver = value.isAfter(dayjs(), "day");
    var isBeforeStartDate = !endDate && startDate !== null ? value.isBefore(startDate) : false;
    var isBetween = startDate &&
        endDate &&
        !value.isSame(endDate, "day") &&
        value.isAfter(startDate) &&
        value.isBefore(endDate);
    var isSameStartDate = startDate && value.isSame(startDate, "day");
    var isSameEndDate = endDate && value.isSame(endDate, "day");
    var getBackground = useMemo(function () {
        // default
        if (!startDate || !endDate)
            return ""; // non selected date
        if (!isBetween && !isSameStartDate && !isSameEndDate)
            return ""; // not between date
        if (startDate.isSame(endDate, "day"))
            return ""; // if start date and end date is same
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
    return (_jsx("div", __assign({ className: "flex w-full items-center justify-center ".concat(isBetween && value.day() !== 0 && value.day() !== 6 ? "bg-bg-gray" : "", " "), style: {
            background: getBackground,
        } }, { children: _jsx("button", __assign({ type: "button", className: "h-8 w-8 rounded-full ".concat(isToday ? "border-[2px] border-primary-500" : "", " ").concat(isBeforeStartDate || !isCurrentMonth || isOver
                ? "text-neutral-500"
                : "text-white", " text-body2"), style: {
                backgroundColor: 
                // eslint-disable-next-line
                value.isSame(startDate, "day") || value.isSame(endDate, "day")
                    ? "#008fff"
                    : isBetween && (value.day() === 0 || value.day() === 6)
                        ? "#616161"
                        : "",
            }, onClick: function () { return onClick(value); }, disabled: isBeforeStartDate || !isCurrentMonth || isOver }, { children: day })) })));
}
