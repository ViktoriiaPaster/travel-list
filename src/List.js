import { useState } from "react";
import { Item } from "./Item";

export const List = ({ items, onDeleteItems, onToggle, onClear }) => {
  const [sortOption, setSortOption] = useState("input");
  let sortedItems;

  if (sortOption === "input") {
    sortedItems = items;
  } else if (sortOption === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortOption === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list text-amber-900 py-8 font-medium flex justify-between flex-col gap-4 items-center">
      <ul className="list-none w-[80%] grid gap-3 justify-center content-start">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggle={onToggle}
          />
        ))}
      </ul>

      {sortedItems.length > 0 && (
        <div className="actions text-center">
          <select
            className="mb-5 md:mb-0 md:mr-5"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClear}>Clear list</button>
        </div>
      )}
    </div>
  );
};
