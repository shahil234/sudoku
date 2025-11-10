import React from "react";
import sudoku from "sudoku";
import Board from "./Board";
const Game = () => {
  const puzzle = sudoku.makepuzzle();
  const solution = sudoku.solvepuzzle(puzzle);

  return (
    <div>
      <span className="text-xl font-semibold">Sudoku</span>
      <section className="flex items-center justify-center gap-10 ">
        <Board puzzle={puzzle} solution={solution} />
      </section>
    </div>
  );
};

export default Game;
