import { useState } from "react";

export default function CounterFC() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Current count : {counter}
      </button>
    </div>
  );
}
