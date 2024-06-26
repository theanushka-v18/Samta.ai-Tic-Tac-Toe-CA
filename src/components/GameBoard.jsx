import React, { useState, useEffect } from "react";
import Square from "./Square";


const GameBoard = ({ setResetGameStatus, resetGameStatus }) => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    
    useEffect(() => {
        if (resetGameStatus) {
            setState(Array(9).fill(null));
            setIsXTurn(true);
            localStorage.setItem('scoreO', Number(0));
            localStorage.setItem('scoreX', Number(0));
            setResetGameStatus(false);
            console.log('game reset done');
        }
    }, [resetGameStatus, setResetGameStatus]);
    
    let scoreO = localStorage.getItem('scoreO') || 0;
    let scoreX = localStorage.getItem('scoreX') || 0;

  useEffect(() => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        if (state[a] === "X") {
          localStorage.setItem('scoreX', Number(scoreX)+10);
        } else {
          localStorage.setItem('scoreO', Number(scoreO)+10);
        }
        setState(Array(9).fill(null));
        return;
      }
    }

    if (state.every((square) => square !== null)) {
      setState(Array(9).fill(null));
    }
  }, [state]);

  function handleClick(index) {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  }
  return (
    <div className="w-[70%] m-auto flex">
      <div>
        <h2 className="font-bold text-[#0000FF] text-2xl">Player X</h2>
        <p className="mt-4 font-semibold text-xl">Score : {scoreX}</p>
      </div>
      <div className="w-fit m-auto">
        <h3 className="text-center mb-4">
          Player {isXTurn ? "X" : "O"} please move
        </h3>
        <div>
          <div className="flex justify-center">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="flex justify-center">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="flex justify-center">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-[#FF0000] text-2xl">Player O</h2>
        <p className="mt-4 font-semibold text-xl">Score : {scoreO}</p>
      </div>
    </div>
  );
};

export default GameBoard;
