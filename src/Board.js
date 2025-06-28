import React from "react";
import Box from "./Box";
import Line from "./Line";

export default function Board({
  boxes,
  winner,
  setBoxes,
  currentMove,
  winningIndex,
  calculateWinner,
}) {
  return (
    <>
      <div className="game_board">
        {boxes.map((box, index) => (
          <React.Fragment key={index}>
            <Box
              value={box}
              index={index}
              boxes={boxes}
              winner={winner}
              setBoxes={setBoxes}
              currentMove={currentMove}
              calculateWinner={calculateWinner}
            />
          </React.Fragment>
        ))}
        {winner && winner !== "Draw" && (
          <>
            <Line winningIndex={winningIndex} />
          </>
        )}
      </div>
    </>
  );
}
