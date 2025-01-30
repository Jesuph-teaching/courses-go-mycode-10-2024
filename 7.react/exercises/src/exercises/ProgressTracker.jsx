import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function ProgressTracker() {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <ProgressBar width={progress} />
      <form>
        <label htmlFor="progress"></label>
        <input
          min={0}
          max={100}
          step={5}
          type="number"
          id="progress"
          value={progress}
          onChange={(e) => {
            setProgress(Number(e.currentTarget.value));
          }}
        />
      </form>
    </div>
  );
}
