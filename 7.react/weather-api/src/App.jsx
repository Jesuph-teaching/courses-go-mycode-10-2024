import Counter from "./Components/Counter";
import CounterWithoutMsg from "./Components/CounterWithoutMsg";
import Tracker from "./Components/Tracker";
import WeatherCard from "./Components/WeatherCard";

function App() {
  return (
    <>
      <Counter />
      <WeatherCard />
      <Tracker />
      <CounterWithoutMsg />
    </>
  );
}

export default App;
