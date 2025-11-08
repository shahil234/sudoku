import React from "react";
import sudoku from "sudoku";
import Board from "./Board";
const Game = () => {
  const puzzle = sudoku.makepuzzle();
  const solution = sudoku.solvepuzzle(puzzle);

  return (
    <div>
      <p>Game</p>
      <section className="flex items-center justify-between gap-10">
        <Board puzzle={puzzle} solution={solution} />
      </section>
    </div>
  );
};

export default Game;
