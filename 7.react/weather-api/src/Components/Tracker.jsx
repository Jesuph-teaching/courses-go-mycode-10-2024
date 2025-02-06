import useTrack from "../hooks/useTrack";

export default function Tracker() {
  const { counter, message, setCounter } = useTrack();
  return (
    <div>
      <input
        type="number"
        value={counter}
        onChange={(e) => {
          setCounter(e.currentTarget.value);
        }}
      />
      {message}
    </div>
  );
}
