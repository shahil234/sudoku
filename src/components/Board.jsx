import React, { useEffect, useState, createContext, useMemo } from "react";
import SquareBlock from "./SquareBlock";
import { getSquareGroup } from "../utils/helper.js";
import SubSquare from "./SubSquare.jsx";
import Keypad from "./Keypad.jsx";

export const GameContext = createContext(null);

const Board = ({ puzzle, solution }) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(getSquareGroup(puzzle));
  const [puzzleMistake, setPuzzleMistake] = useState([]);

  const puzzleSolution = useMemo(() => getSquareGroup(solution));


  const [selectedBlock, setSelectedBlock] = useState({
    squareIndex: null,
    squareRowIndex: null,
    squareBlockIndex: null,
  });

  console.log("mistakes", puzzleMistake)
  return (
    <GameContext
      value={{
        selectedBlock,
        setSelectedBlock,
        currentPuzzle,
        setCurrentPuzzle,
        puzzleSolution,
        puzzleMistake,
        setPuzzleMistake
      }}
    >
      <div className="flex flex-col gap-10 items-center justify-between">
        <div className="border grid grid-cols-3 grid-rows-3 w-[400px] h-[400px] lg:w-xl lg:h-[576px]">
          {currentPuzzle?.map((item, index) => (
            <SubSquare elementArr={item} squareIndex={index} key={index} />
          ))}
        </div>
        <div>
          <Keypad />
        </div>
      </div>
    </GameContext>
  );
};

export default Board;
