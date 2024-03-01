export const Item = ({ item, onDeleteItems, onToggle }) => {
  return (
    <li className="flex items-center gap-4">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        className="bg-transparent border-none"
        onClick={() => onDeleteItems(item.id)}
      >
        ❌
      </button>
    </li>
  );
};
