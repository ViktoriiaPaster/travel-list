export const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <footer className="stats bg-teal-500 text-center font-bold py-10">
        Start adding some items to your packing list 👨‍💻
      </footer>
    );
  }

  const allItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems * 100) / allItems);

  return (
    <footer className="stats bg-teal-500 text-center font-bold py-10">
      {percentage === 100
        ? "You got everything 🎉 Ready to go 🏃"
        : `👨‍💻 You have ${allItems} items on your list and you already packed ${packedItems} (${percentage}%)`}
    </footer>
  );
};
