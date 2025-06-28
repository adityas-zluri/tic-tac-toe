import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Reset from "./Reset";
import { WINNING_COMBINATIONS } from "./constants";

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningIndex, setWinningIndex] = useState(-1);

  const calculateWinner = ({ boxes, currentMove }) => {
    let i = 0;
    let _winner = null;
    for (; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (boxes[a] != null && boxes[a] === boxes[b] && boxes[b] === boxes[c]) {
        _winner = currentMove;
        break;
      }
    }
    if (!boxes.some((box) => box == null)) {
      _winner = "Draw";
    }
    if (_winner) {
      setWinner(_winner);
      if (_winner !== "Draw") {
        setWinningIndex(i);
      }
    } else {
      setCurrentMove(currentMove === "X" ? "O" : "X");
    }
  };

  return (
    <>
      <div className="game">
        <Board
          boxes={boxes}
          winner={winner}
          setBoxes={setBoxes}
          currentMove={currentMove}
          winningIndex={winningIndex}
          setCurrentMove={setCurrentMove}
          calculateWinner={calculateWinner}
        />
        {winner && (
          <>
            <div className="game_winner">
              {winner === "Draw"
                ? `Game Drawn!`
                : `Player ${currentMove === "X" ? 1 : 2} wins!`}
            </div>
            <Reset
              setBoxes={setBoxes}
              setWinner={setWinner}
              setCurrentMove={setCurrentMove}
              setWinningIndex={setWinningIndex}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
