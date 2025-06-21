import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [num, setNum] = useState(0);
  const [isdarkTheme, setIsDarkTheme] = useState(false);
  const prime = useMemo(() => findNthPrime(num), [num]);
  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-gray-500 ${
        isdarkTheme && "bg-gray-400 text-white"
      }`}
    >
      <button
        className={`${
          isdarkTheme
            ? "text-white bg-orange-400 p-1 m-4"
            : "text-black bg-green-200 p-1 m-4"
        }`}
        onClick={() => setIsDarkTheme(!isdarkTheme)}
      >
        Toggle
      </button>
      <div>
        <input
          className="w-72 border border-gray-500 p-2 m-4"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div>
        <h1 className="font-bold mt-4 text=2xl m-4">nth prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
