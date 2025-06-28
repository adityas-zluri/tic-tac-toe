export default function Reset({
  setBoxes,
  setWinner,
  setCurrentMove,
  setWinningIndex,
}) {
  const handleReset = () => {
    setBoxes(Array(9).fill(null));
    setWinningIndex(-1);
    setCurrentMove("X");
    setWinner(null);
  };

  return (
    <>
      <div className="game_reset" onClick={handleReset}>
        Reset
      </div>
    </>
  );
}
