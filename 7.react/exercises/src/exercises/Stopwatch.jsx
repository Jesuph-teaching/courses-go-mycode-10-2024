import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [timer, setTimer] = useState({
    min: 0,
    sec: 55,
  });
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        setTimer((x) => {
          return x.sec + 1 > 59
            ? { sec: 0, min: x.min + 1 }
            : { min: x.min, sec: x.sec + 1 };
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [started]);
  useEffect(() => {
    if (timer.min === 0 && timer.sec === 0) {
      setStarted(false);
    }
  }, [timer]);
  return (
    <div className="flex flex-col p-4 gap-2">
      <h2 className="text-2xl font-bold">Stop watch/Timer</h2>
      <p>
        {timer.min} min {timer.sec} sec
      </p>
      <div className="flex gap-4">
        <button
          className="btn"
          onClick={() => {
            setStarted(true);
          }}
        >
          Start
        </button>
        <button
          className="btn"
          onClick={() => {
            setStarted(false);
          }}
        >
          Stop
        </button>
        <button
          className="btn"
          onClick={() => {
            setTimer({ min: 0, sec: 0 });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
