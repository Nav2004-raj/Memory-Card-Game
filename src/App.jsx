import Card from "./components/Card";
import GameHeader from "./components/GameHeader";
import WinMesssage from "./components/WinMesssage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

const App = () => {
  const {
    cards,
    score,
    moves,
    isGameComplete,
    initializeGame,
    handleCardClick,
  } = useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

      {isGameComplete && <WinMesssage moves={moves} />}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
