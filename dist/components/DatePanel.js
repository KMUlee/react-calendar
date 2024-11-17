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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import dayjs from "dayjs";
import { getDayList, throttle } from "../utils";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import Month from "./Month";
var DatePanel = function (_a) {
    var years = _a.years, curr = _a.curr, setCurr = _a.setCurr, startDate = _a.startDate, endDate = _a.endDate, onClick = _a.onClick, isChanged = _a.isChanged, setIsChanged = _a.setIsChanged;
    // ref
    var scrollRef = useRef(null);
    // vars
    var yearList = useMemo(function () { return __spreadArray(__spreadArray([], years, true), [years[years.length - 1] + 1], false); }, [years]); // add one more year for the last month(December)
    var virtualizer = useVirtualizer({
        count: years.length * 12 + 1,
        getScrollElement: function () { return scrollRef.current; },
        estimateSize: function (index) {
            var year = yearList[index > 0 ? Math.floor(index / 12) : 0];
            var month = (index % 12) + 1;
            var weeks = Math.ceil(getDayList("".concat(year, "-").concat(month, "-01")).length / 7);
            var gaps = weeks - 1;
            return weeks * 32 + gaps * 4;
        },
        overscan: 0,
        gap: 4,
    });
    var items = virtualizer.getVirtualItems();
    // Scroll to the index on mount and when the current date changes
    useCallback(function () {
        if (virtualizer && isChanged) {
            var today = curr;
            var currentYear = today.year();
            var currentMonth = today.month();
            var startYearIndex = yearList.indexOf(currentYear) * 12;
            var todayIndex = startYearIndex + currentMonth;
            virtualizer.scrollToIndex(todayIndex, { align: "start" });
            setIsChanged(false);
        }
    }, [virtualizer, isChanged, curr, setIsChanged, yearList])();
    // Handle scroll event
    var handleScroll = throttle(function () {
        var _a, _b;
        var currIndex = ((_a = items[Math.floor(items.length / 2) || 0]) === null || _a === void 0 ? void 0 : _a.index) || 0;
        var year = yearList[currIndex > 0 ? Math.floor(currIndex / 12) : 0];
        var month = (currIndex % 12) + 1;
        var scrollTop = (_b = scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollTop;
        if (scrollTop === 0) {
            setCurr(dayjs("".concat(yearList[0], "-01-01")));
        }
        else {
            setCurr(dayjs("".concat(year, "-").concat(month, "-01")));
        }
    }, 150);
    useEffect(function () {
        var element = scrollRef.current;
        if (!element)
            return;
        element.addEventListener("scroll", handleScroll);
        return function () {
            element.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    return (_jsx("div", __assign({ className: "flex w-full overflow-y-scroll scrollbar-hide h-60", ref: scrollRef }, { children: _jsx("div", __assign({ className: "relative flex flex-col w-full", style: {
                height: "".concat(virtualizer.getTotalSize(), "px"),
            } }, { children: items.map(function (item) { return (_jsx("div", __assign({ className: "absolute grid w-full grid-cols-7 gap-y-1", style: {
                    height: "".concat(item.size, "px"),
                    transform: "translateY(".concat(item.start, "px)"),
                }, ref: virtualizer.measureElement }, { children: _jsx(Month, { date: "".concat(yearList[Math.floor(item.index / 12)], "-").concat((item.index % 12) + 1, "-01"), startDate: startDate, endDate: endDate, nowDate: curr.format("YYYY-MM-DD"), onClick: onClick }) }), item.key)); }) })) })));
};
export default DatePanel;
