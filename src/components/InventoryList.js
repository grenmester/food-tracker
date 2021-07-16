import React from "react";
import InventoryItem from "./InventoryItem";

const InventoryList = () => (
  <div>
    <h2 className="mb-3">Inventory</h2>
    {[...Array(60).keys()].map((idx) => (
      <InventoryItem
        key={idx}
        {...(idx % 11 !== 0 && {
          image:
            "https://sc04.alicdn.com/kf/H3687b974a93946328d66940353e38026a.jpg",
        })}
        title="Common Food Item"
        {...(idx % 2 !== 0 && { quantity: idx })}
        {...(idx % 5 !== 0 && { location: "Outside Refridgerator" })}
        {...(idx % 3 === 0
          ? { tags: ["snack", "fruit"] }
          : idx % 3 === 1 && { tags: ["snack"] })}
        {...(idx % 7 !== 0 && { date: `10/${(idx % 31) + 1}/21` })}
      />
    ))}
  </div>
);

export default InventoryList;
