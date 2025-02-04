import { useReducer, useState } from "react";
import Status from "./components/Status";
import shuffle from "lodash.shuffle";
import { useEffect } from "react";
import Card from "./components/Card";
import GamePopup from "./components/GamePopup";
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
      if (!prevState.isPlaying) prevState.isPlaying = true;
      if (!prevState.card1) {
        const newCards = [...prevState.cards];
        newCards[value.i].open = true;
        return {
          ...prevState,
          cards: newCards,
          card1: value,
          flips: prevState.flips + 1,
        };
      }
      if (!prevState.card2) {
        const newCards = [...prevState.cards];
        newCards[value.i].open = true;
        return {
          ...prevState,
          cards: newCards,
          card2: value,
          flips: prevState.flips + 1,
        };
      }
      return { ...prevState };
    }
    case "evaluate": {
      return {
        ...prevState,
        card1: null,
        card2: null,
        ...(prevState.card1.image === prevState.card2.image
          ? {
              doneCards: [
                ...prevState.doneCards,
                prevState.card1.i,
                prevState.card2.i,
              ],
              score: prevState.score + 10,
            }
          : {
              score: Math.max(0, prevState.score - 5),
              cards: prevState.cards.map((card, i) =>
                i === prevState.card1.i || i === prevState.card2.i
                  ? { ...card, open: false }
                  : card
              ),
            }),
      };
    }
    case "game-started": {
      return {
        card1: null,
        card2: null,
        score: 0,
        flips: 0,
        doneCards: [],
        cards: shuffle(doubleCards).map((url) => ({
          image: url,
          open: false,
        })),
        isPlaying: false,
      };
    }
    case "game-ended": {
      return {
        ...prevState,
        isPlaying: false,
      };
    }
    default: {
      return prevState;
    }
  }
}

function App() {
  const [timer, setTimer] = useState(60);
  const [gameState, gameDispatcher] = useReducer(GameReducer, {
    card1: null,
    card2: null,
    score: 0,
    flips: 0,
    doneCards: [],
    cards: [],
    isPlaying: false,
  });
  useEffect(() => {
    if (timer === 60) gameDispatcher({ type: "game-started" });

    return () => {};
  }, [timer]);
  useEffect(() => {
    if (gameState.card1 && gameState.card2) {
      gameDispatcher({ type: "evaluate" });
    }
  }, [gameState.card1, gameState.card2]);
  useEffect(() => {
    if (
      gameState.cards.length === gameState.doneCards.length &&
      gameState.doneCards.length !== 0
    ) {
      console.log("You have won!");
      gameDispatcher({ type: "game-ended" });
    }
  }, [gameState.cards, gameState.doneCards]);

  useEffect(() => {
    if (gameState.isPlaying) {
      const int = setInterval(() => {
        setTimer((p) => {
          if (p === 0) {
            clearInterval(int);
            return p;
          }
          return p - 1;
        });
      }, 1000);
      return () => {
        clearInterval(int);
      };
    }
  }, [gameState.isPlaying]);
  useEffect(() => {
    if (timer === 0) {
      console.error("You have lost!");
      gameDispatcher({ type: "game-ended" });
    }
  }, [timer]);
  return (
    <div className="max-w-3xl p-3 w-full gap-8 flex flex-col my-auto">
      {/* <Counter /> */}
      <h1 className="text-4xl text-white font-bold mx-auto ">Memory Marvel</h1>
      <div className="flex gap-4 ">
        <Status icon="/icons/medal.svg" title="Score" value={gameState.score} />
        <Status icon="/icons/flip.svg" title="Flips" value={gameState.flips} />
        <Status icon="/icons/stopwatch.svg" title="Timer" value={timer} />
      </div>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {gameState.cards.map((card, i) => (
          <Card
            key={i}
            index={i}
            image={card.image}
            open={card.open}
            disabled={Boolean(gameState.card1 && gameState.card2)}
            onSelect={() => {
              gameDispatcher({
                type: "selected-card",
                value: { i, image: card.image },
              });
            }}
          />
        ))}
      </div>
      <GamePopup
        open={!gameState.isPlaying && timer !== 60}
        timer={timer}
        score={gameState.score}
        flips={gameState.flips}
        message={timer > 0 ? "You have won!" : "You have lost!, try again!"}
        onReset={() => {
          setTimer(60);
        }}
      />
    </div>
  );
}

export default App;
