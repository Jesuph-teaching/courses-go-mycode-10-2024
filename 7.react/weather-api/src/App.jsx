import Counter from "./Components/Counter";
import CounterWithoutMsg from "./Components/CounterWithoutMsg";
import SubText from "./Components/SubText";
import Tracker from "./Components/Tracker";
import WeatherCard from "./Components/WeatherCard";

function App() {
  return (
    <>
      <SubText />
      <Counter />
      <WeatherCard />
      <Tracker />
      <CounterWithoutMsg />
    </>
  );
}

export default App;
