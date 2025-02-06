import useTrack from "../hooks/useTrack";

export default function Counter() {
  const { counter, message, setCounter } = useTrack();
  return (
    <div className="flex flex-col ">
      <div className="flex gap-2">
        <button
          className="btn"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <input
          type="number"
          id="counter"
          className="input "
          value={counter}
          onChange={(e) => {
            setCounter(e.currentTarget.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
}
