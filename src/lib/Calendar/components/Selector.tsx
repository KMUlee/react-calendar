import { SetStateAction } from "react";

interface ItemList {
  name: string;
  value?: any;
  icon?: string;
}
interface DropDownSelectListProps {
  size?: "sm" | "lg";
  itemList: ItemList[];
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
  setSelectedItem: (item: ItemList) => void;
}

const Selector = ({
  size = "sm",
  itemList,
  isClicked,
  setIsClicked,
  setSelectedItem,
}: DropDownSelectListProps) => {
  return (
    <>
      {isClicked && (
        <div
          className={`absolute left-0 top-full z-20 mt-1 min-w-max rounded-[10px] border border-stroke-1 bg-bg-darkgray p-2.5 text-white shadow-custom-outset ${
            size === "lg" && "w-full"
          }`}
        >
          <ul className="flex max-h-52 w-full flex-col gap-2.5 overflow-y-auto scrollbar-webkit md:max-h-96">
            {itemList.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  className="flex w-full px-3 py-2 rounded-xl text-neutral-50 hover-bg-default"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item);
                    setIsClicked(false);
                  }}
                >
                  <p className="text-caption md:text-body1">{item.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

interface MonthSelectorProps {
  months: number[];
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  onSelect: (month: number) => void;
}

export const MonthSelector = ({
  months,
  open,
  setOpen,
  onSelect,
}: MonthSelectorProps) => {
  const itemList: ItemList[] = months.map((month) => ({ name: `${month}월` }));
  return (
    <Selector
      itemList={itemList}
      isClicked={open}
      setIsClicked={setOpen}
      setSelectedItem={(item) => {
        const month = parseInt(item.name.replace("월", ""), 10);
        onSelect(month);
        setOpen(false);
      }}
    />
  );
};

interface YearSelectorProps {
  years: number[];
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  onSelect: (year: number) => void;
  closeDropdown: () => void;
}

export const YearSelector = ({
  years,
  open,
  setOpen,
  onSelect,
  closeDropdown,
}: YearSelectorProps) => {
  const itemList: ItemList[] = years.map((year) => ({ name: `${year}년` }));

  return (
    <Selector
      itemList={itemList}
      isClicked={open}
      setIsClicked={setOpen}
      setSelectedItem={(item) => {
        onSelect(parseInt(item.name, 10));
        setOpen(false);
        closeDropdown();
      }}
    />
  );
};
