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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
var Selector = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "sm" : _b, itemList = _a.itemList, isClicked = _a.isClicked, setIsClicked = _a.setIsClicked, setSelectedItem = _a.setSelectedItem;
    return (_jsx(_Fragment, { children: isClicked && (_jsx("div", __assign({ className: "absolute left-0 top-full z-20 mt-1 min-w-max rounded-[10px] border border-stroke-1 bg-bg-darkgray p-2.5 text-white shadow-custom-outset ".concat(size === "lg" && "w-full") }, { children: _jsx("ul", __assign({ className: "flex max-h-52 w-full flex-col gap-2.5 overflow-y-auto scrollbar-webkit md:max-h-96" }, { children: itemList.map(function (item) { return (_jsx("li", { children: _jsx("button", __assign({ type: "button", className: "flex w-full px-3 py-2 rounded-xl text-neutral-50 hover-bg-default", onClick: function (e) {
                            e.stopPropagation();
                            setSelectedItem(item);
                            setIsClicked(false);
                        } }, { children: _jsx("p", __assign({ className: "text-caption md:text-body1" }, { children: item.name })) })) }, item.name)); }) })) }))) }));
};
export var MonthSelector = function (_a) {
    var months = _a.months, open = _a.open, setOpen = _a.setOpen, onSelect = _a.onSelect;
    var itemList = months.map(function (month) { return ({ name: "".concat(month, "\uC6D4") }); });
    return (_jsx(Selector, { itemList: itemList, isClicked: open, setIsClicked: setOpen, setSelectedItem: function (item) {
            var month = parseInt(item.name.replace("월", ""), 10);
            onSelect(month);
            setOpen(false);
        } }));
};
export var YearSelector = function (_a) {
    var years = _a.years, open = _a.open, setOpen = _a.setOpen, onSelect = _a.onSelect, closeDropdown = _a.closeDropdown;
    var itemList = years.map(function (year) { return ({ name: "".concat(year, "\uB144") }); });
    return (_jsx(Selector, { itemList: itemList, isClicked: open, setIsClicked: setOpen, setSelectedItem: function (item) {
            onSelect(parseInt(item.name, 10));
            setOpen(false);
            closeDropdown();
        } }));
};
