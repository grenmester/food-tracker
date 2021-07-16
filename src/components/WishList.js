import React from "react";
import WishItem from "./WishItem";

const WishList = () => (
  <div>
    <h2 className="mb-3">Wish List</h2>
    {[...Array(60).keys()].map((idx) => (
      <WishItem
        key={idx}
        {...(idx % 11 !== 0 && {
          image:
            "https://sc04.alicdn.com/kf/H3687b974a93946328d66940353e38026a.jpg",
        })}
        title="Common Food Item"
        {...(idx % 2 !== 0 && { quantity: idx })}
        {...(idx % 5 !== 0 && { location: "Costco" })}
        {...(idx % 3 === 0
          ? { tags: ["snack", "fruit"] }
          : idx % 3 === 1 && { tags: ["snack"] })}
        {...(idx % 7 !== 0 && { person: "Jacky" })}
      />
    ))}
  </div>
);

export default WishList;
