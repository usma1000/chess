// import { useState } from "react";
import "./App.css";
import Board from "./Components/Board/Board";
import { startingPieces } from "./Utils/StartingPieces";

function App() {
  // const [currentPlayer, setCurrentPlayer] = useState("white");
  // const [pieces, setPieces] = useState(startingPieces);

  return (
    <>
      <h1>Usma's Chess</h1>
      <Board pieces={startingPieces} />
    </>
  );
}

export default App;
