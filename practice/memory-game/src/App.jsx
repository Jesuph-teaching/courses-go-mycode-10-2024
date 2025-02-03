import { useReducer, useState } from "react";
import Status from "./components/Status";
import shuffle from "lodash.shuffle";
import { useEffect } from "react";
import Card from "./components/Card";
// import Counter from "./components/Counter";
const gameCards = [
  "/icons/airplane.svg",
  "/icons/bath-tub.svg",
  "/icons/cocktail.svg",
  "/icons/hotel.svg",
  "/icons/surf.svg",
];
const doubleCards = [...gameCards, ...gameCards];

function GameReducer(prevState, action) {
  const { type, value } = action;
  switch (type) {
    case "selected-card": {
      if (!prevState.card1) {
        return {
          ...prevState,
          card1: value,
          flips: prevState.flips + 1,
        };
      }
      if (!prevState.card2) {
        if (prevState.card1.card === value.card) {
          return {
            ...prevState,
            card1: null,
            card2: null,
            doneCards: [...prevState.doneCards, prevState.card1.i, value.i],
            score: prevState.score + 5,
            flips: prevState.flips + 1,
          };
        }
        return {
          ...prevState,
          card1: null,
          card2: null,
          flips: prevState.flips + 1,
          score: Math.max(0, prevState.score - 5),
        };
      }
      return prevState;
    }
    default: {
      return prevState;
    }
  }
}

function App() {
  const [cards, setCards] = useState(doubleCards);
  const [gameState, gameDispatcher] = useReducer(GameReducer, {
    card1: null,
    card2: null,
    score: 0,
    flips: 0,
    doneCards: [],
  });
  useEffect(() => {
    setCards(shuffle(doubleCards));
    return () => {};
  }, []);
  return (
    <div className="max-w-3xl p-3 w-full gap-8 flex flex-col my-auto">
      {/* <Counter /> */}
      <h1 className="text-4xl text-white font-bold mx-auto ">Memory Marvel</h1>
      <div className="flex gap-4 ">
        <Status icon="/icons/medal.svg" title="Score" value={gameState.score} />
        <Status icon="/icons/flip.svg" title="Flips" value={gameState.flips} />
        <Status icon="/icons/stopwatch.svg" title="Timer" value={60} />
      </div>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {cards.map((card, i) => (
          <Card
            key={i}
            index={i}
            image={card}
            open={gameState.card1?.i === i || gameState.doneCards.includes(i)}
            onSelect={() => {
              gameDispatcher({ type: "selected-card", value: { i, card } });
            }}
          />
        ))}
      </div>
      <p className="text-white">{JSON.stringify(gameState)}</p>
    </div>
  );
}

export default App;
