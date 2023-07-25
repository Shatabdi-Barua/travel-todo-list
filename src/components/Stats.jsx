import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <div>
        <p className="stats">
          <em>Start adding some items in your packing list</em>
        </p>
      </div>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percertage = Math.round((numPackedItems / numItems) * 100);
  return (
    <div>
      <p className="stats">
        <em>
          {percertage === 100
            ? "You got everything to go"
            : `You have total ${numItems} items on your list and you already packed ${numPackedItems} item (${percertage}%)`}
        </em>
      </p>
    </div>
  );
};

export default Stats;
