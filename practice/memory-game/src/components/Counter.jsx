import React, { useReducer, useState } from "react";

export default function Counter() {
  //const [count, setCount] = useState(0);
  const [count, countSetter] = useReducer(function (prevState, action) {
    const { type, value } = action;
    switch (type) {
      case "increment": {
        return prevState + 1;
      }
      case "decrement": {
        return prevState - 1;
      }
      case "set": {
        return value;
      }
      case "pythagors": {
        const x = prevState ** 2 + 16;
        return x;
      }
      default: {
        console.log("action not specified");
        return prevState;
      }
    }
  }, 0);
  return (
    <div className="flex gap-2">
      <button
        className="bg-white p-4"
        onClick={() => {
          countSetter({ type: "decrement" });
        }}
      >
        -
      </button>
      {count}
      <button
        className="bg-white p-4"
        onClick={() => {
          countSetter({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          countSetter({
            type: "set",
            value: Number(e.currentTarget.innerText),
          });
        }}
      >
        10
      </button>
    </div>
  );
}
