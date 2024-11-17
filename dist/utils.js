import dayjs from "dayjs";
export var throttle = function (callback, delay) {
    var timer = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer)
            return;
        timer = setTimeout(function () {
            callback.apply(void 0, args);
            timer = null;
        }, delay);
    };
};
export var getDayList = function (date) {
    var value = dayjs(date);
    var startOfMonth = value.startOf("month"); // 이번 달의 첫 날
    var endOfMonth = value.endOf("month"); // 이번 달의 마지막 날
    // 1일이 포함된 주의 첫 번째 날짜(일요일)
    var startOfFirstWeek = startOfMonth.startOf("week");
    // 이번 달의 마지막 날이 속한 주의 토요일
    var lastSaturday = endOfMonth.day() === 6
        ? endOfMonth
        : endOfMonth.subtract(endOfMonth.day() + 1, "day"); // 마지막 주의 전 주 토요일
    var dates = [];
    var current = startOfFirstWeek;
    while (current.isBefore(lastSaturday) || current.isSame(lastSaturday)) {
        dates.push(current.toDate());
        current = current.add(1, "day");
    }
    return dates;
};
