import { useState } from "react";

export const Form = ({ onAddItems }) => {
  const [description, setDesciprion] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);

    setDesciprion("");
    setQuantity(1);
  }
  return (
    <form
      className="add-form bg-orange-400 py-10 flex items-center justify-center gap-4 flex-wrap text-center"
      onSubmit={handleSubmit}
    >
      <h3 className="mr-3 text-4xl">What do you need for your trip? 📝</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (item, index) => index + 1).map(
          (number) => (
            <option value={number} key={number}>
              {number}
            </option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="Enter an item..."
        value={description}
        onChange={(e) => setDesciprion(e.target.value)}
      ></input>
      <button className="uppercase bg-teal-500 transition hover:bg-amber-800 hover:text-white">
        Add
      </button>
    </form>
  );
};
