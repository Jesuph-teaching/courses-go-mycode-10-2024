import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter((previous) => previous + 1);
        }}
      >
        counted to : {counter}
      </button>
    </div>
  );
}
