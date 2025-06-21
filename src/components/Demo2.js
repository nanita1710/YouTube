import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 10;
  const ref = useRef(0);
  const i = useRef(null);
  //   useEffect(() => {
  //     i.current = setInterval(() => {
  //       console.log("hello", Math.random());
  //     }, 1000);
  //     // return () => clearInterval(i.current);
  //   }, []);
  return (
    <div className="m-4 p-2 bg-slate-50 border borde-black w-96 h-96 ">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
          }}
        >
          Increase x
        </button>
        <h1 className="font-bold text-2xl">X : {x}</h1>
      </div>
      <div>
        <button className="bg-green-100 p-2 m-4" onClick={() => setY(y + 1)}>
          Increase y
        </button>
        <h1 className="font-bold text-2xl">Y : {y}</h1>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increase ref
        </button>
        <h1 className="font-bold text-2xl">Ref : {ref.current}</h1>
      </div>
      <button
        className="p-2 m-2 bg-red-800 rounded-md text-white"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Interval
      </button>
    </div>
  );
};

export default Demo2;
