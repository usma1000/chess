import Square from "../Square/Square";
import "./Board.css";

interface Props {
  pieces: Piece[];
}

const rankLabels = ["8", "7", "6", "5", "4", "3", "2", "1"];
const fileLabels = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Board({ pieces }: Props) {
  function renderSquares() {
    let squares: JSX.Element[] = [];

    rankLabels.map((rank, i) => {
      fileLabels.map((file, j) => {
        const piece = pieces.filter(
          (piece) => piece.rank === rank && piece.file === file
        )[0];

        squares.push(
          <Square
            rank={rank}
            file={file}
            color={(i + j) % 2 ? "dark" : "light"}
            piece={piece}
            key={rank + file}
          />
        );
      });
    });

    return squares;
  }

  return (
    <div className="board-container">
      <div className="rank-labels">
        {rankLabels.map((i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
      <div className="squares-container">{renderSquares()}</div>
      <div className="file-labels">
        {fileLabels.map((i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
    </div>
  );
}
