import React, { useEffect, useState } from "react";

export default function TestComponent() {
  const [counter, setCounter] = useState(0);
  /*  useEffect(() => {
    console.log("any change happened");
  });
 */
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);
  useEffect(() => {
    console.log("counter changed");
  }, [counter]);

  return (
    <div>
      <input
        type="number"
        value={counter}
        onChange={(e) => {
          setCounter(Number(e.currentTarget.value));
        }}
      />
    </div>
  );
}
