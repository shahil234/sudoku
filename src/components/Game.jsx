import React from "react";
import sudoku from "sudoku";
import Board from "./Board";
const Game = () => {
  const puzzle = sudoku.makepuzzle();
  const solution = sudoku.solvepuzzle(puzzle);

  return (
    <div>
      <p>Game</p>
        <Board puzzle={puzzle} solution={solution} />
    </div>
  );
};

export default Game;
