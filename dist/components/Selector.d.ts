import { SetStateAction } from "react";
interface MonthSelectorProps {
    months: number[];
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    onSelect: (month: number) => void;
}
export declare const MonthSelector: ({ months, open, setOpen, onSelect, }: MonthSelectorProps) => import("react/jsx-runtime").JSX.Element;
interface YearSelectorProps {
    years: number[];
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    onSelect: (year: number) => void;
    closeDropdown: () => void;
}
export declare const YearSelector: ({ years, open, setOpen, onSelect, closeDropdown, }: YearSelectorProps) => import("react/jsx-runtime").JSX.Element;
export {};
