export default function Box({
  value,
  index,
  boxes,
  winner,
  setBoxes,
  currentMove,
  calculateWinner,
}) {
  const handlePlay = () => {
    if (value) {
      return;
    }
    if (winner) {
      return;
    }
    const _boxes = [...boxes];
    _boxes[index] = currentMove;
    setBoxes(_boxes);
    calculateWinner({ boxes: _boxes, currentMove });
  };

  return (
    <>
      <div className="game_board_box" onClick={handlePlay}>
        {value ?? ""}
      </div>
    </>
  );
}
