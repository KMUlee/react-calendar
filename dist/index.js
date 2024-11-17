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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import DatePanel from "./components/DatePanel";
import dayjs from "dayjs";
import { MonthSelector, YearSelector } from "./components/Selector";
import useOutsideClick from "./hooks/useOutsideClick";
import ArrowDownIcon from "./assets/icons/ArrowDownIcon";
var DAYS = ["일", "월", "화", "수", "목", "금", "토"];
var Header = function (_a) {
    var years = _a.years, curr = _a.curr, setCurr = _a.setCurr, setIsChanged = _a.setIsChanged;
    var months = Array.from({ length: 12 }, function (_, i) { return i + 1; });
    var _b = useState(false), openYear = _b[0], setOpenYear = _b[1];
    var _c = useState(false), openMonth = _c[0], setOpenMonth = _c[1];
    var monthRef = useOutsideClick(function () { return setOpenMonth(false); });
    var yearRef = useOutsideClick(function () { return setOpenYear(false); });
    return (_jsxs("div", __assign({ className: "flex items-center justify-start w-full gap-2" }, { children: [_jsxs("div", __assign({ className: "relative cursor-pointer gap-[2px] rounded-md text-neutral-50 flex-center", onClick: function () { return setOpenYear(!openYear); }, role: "presentation", ref: yearRef }, { children: [_jsxs("p", __assign({ className: "text-subhead1 md:text-h3" }, { children: [curr.year(), "\uB144"] })), _jsx("button", __assign({ type: "button", "aria-label": "button-down" }, { children: _jsx(ArrowDownIcon, { width: 20, height: 20 }) })), _jsx(YearSelector, { years: years, open: openYear, setOpen: setOpenYear, onSelect: function (year) {
                            setCurr(curr.set("year", year));
                            setIsChanged(true);
                        }, closeDropdown: function () {
                            setOpenYear(false);
                        } })] })), _jsxs("div", __assign({ className: "relative cursor-pointer gap-[2px] rounded-md text-neutral-50 flex-center", onClick: function () { return setOpenMonth(!openMonth); }, role: "presentation", ref: monthRef }, { children: [_jsxs("p", __assign({ className: "text-subhead1 md:text-h3" }, { children: [curr.month() + 1, "\uC6D4"] })), _jsx("button", __assign({ className: "w-5 h-5", type: "button", "aria-label": "button-down" }, { children: _jsx(ArrowDownIcon, { width: 20, height: 20 }) })), _jsx(MonthSelector, { months: months, open: openMonth, setOpen: setOpenMonth, onSelect: function (month) {
                            setCurr(curr.set("month", month - 1));
                            setIsChanged(true);
                        } })] }))] })));
};
var Calendar = function (_a) {
    var years = _a.years, startDate = _a.startDate, endDate = _a.endDate, onClick = _a.onClick;
    var _b = useState(endDate ? endDate : dayjs()), curr = _b[0], setCurr = _b[1];
    var _c = useState(true), isChanged = _c[0], setIsChanged = _c[1];
    return (_jsxs("div", __assign({ className: "flex flex-col w-full" }, { children: [_jsx(Header, { years: years, curr: curr, setCurr: setCurr, setIsChanged: setIsChanged }), _jsx("div", __assign({ className: "grid w-full grid-cols-7 py-2 text-white" }, { children: DAYS.map(function (day) { return (_jsx("div", __assign({ className: "flex items-center justify-center w-full" }, { children: _jsx("p", __assign({ className: "text-body2-bold" }, { children: day })) }))); }) })), _jsx(DatePanel, { years: years, curr: curr, setCurr: setCurr, onClick: onClick, startDate: startDate, endDate: endDate, isChanged: isChanged, setIsChanged: setIsChanged })] })));
};
export default Calendar;
