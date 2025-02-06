import useTrack from "../hooks/useTrack";

export default function CounterWithoutMsg() {
  const { counter, setCounter } = useTrack();
  return (
    <input
      type="number"
      value={counter}
      onChange={(e) => {
        setCounter(e.currentTarget.value);
      }}
    />
  );
}
