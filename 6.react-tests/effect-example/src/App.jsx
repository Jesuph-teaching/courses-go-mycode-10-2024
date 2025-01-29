import { useState } from "react";
import "./App.css";
import TestComponent from "./TestComponent";

function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      {hidden ? null : <TestComponent />}
      <button
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        {hidden ? "show" : "hide"}
      </button>
    </>
  );
}

export default App;
