import { useState } from "react";
import GameBoard from "./components/GameBoard";

function App() {

  const [resetGameStatus, setResetGameStatus] = useState(false);

  function resetGame() {
    setResetGameStatus(true)
    console.log('resetgame clicked');
  }

  return (
    <div>
      <div className="flex w-[90%] m-auto justify-between items-center mt-8">
        <h1 className="text-4xl text-[#484848] font-bold">Tic Tac Toe</h1>
        <button onClick={resetGame} className="bg-[#484848] text-white px-4 py-2 rounded-md font-semibold">
          Reset Game
        </button>
      </div>
      <div className="mt-24">
        <GameBoard resetGameStatus={resetGameStatus} setResetGameStatus={setResetGameStatus} />
      </div>
    </div>
  );
}

export default App;
