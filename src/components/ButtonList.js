import React from "react";
import Button from "./Button";

const btnList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map((btn) => (
        <Button name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
