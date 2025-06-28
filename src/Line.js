import { WINNING_COMBINATIONS_LINE_STYLE } from "./constants";

export default function Line({ winningIndex }) {
  return (
    <>
      <div
        className="game_line"
        style={WINNING_COMBINATIONS_LINE_STYLE[winningIndex]}
      />
    </>
  );
}
