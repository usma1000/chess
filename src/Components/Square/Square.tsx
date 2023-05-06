import Piece from "../Piece/Piece";
import "./Square.css";

interface Props {
  rank: string;
  file: string;
  color: "light" | "dark";
  piece?: Piece;
}

export default function Square({ rank, file, color, piece }: Props) {
  const colorStyle =
    color === "light" ? "var(--board-light)" : "var(--board-dark)";
  return (
    <div
      title={`${file}${rank}`}
      className="square-container"
      style={{ backgroundColor: colorStyle }}
    >
      {piece && <Piece type={piece} />}
    </div>
  );
}
