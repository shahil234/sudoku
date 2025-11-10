import { useContext, useEffect, useState } from "react";
import SquareBlock from "./SquareBlock";
import { GameContext } from "./Board";

const SubSquare = ({ elementArr, squareIndex }) => {
  const { selectedBlock, setSelectedBlock, currentPuzzle, puzzleMistake } =
    useContext(GameContext);
  const [mistakeIndexes, setMistakeIndexes] = useState([]);

  useEffect(() => {
    setMistakeIndexes(
      puzzleMistake?.filter((mistake) => mistake.squareIndex === squareIndex)
    );
  }, [puzzleMistake]);
  const selectedDigit =
    currentPuzzle?.[selectedBlock.squareIndex]?.[
      selectedBlock?.squareRowIndex
    ]?.[selectedBlock?.squareBlockIndex]?.digit;
  return (
    <div className="grid grid-cols-3 grid-rows-3 border">
      {elementArr?.map((item, index) => {
        return item?.map((subItem, subIndex) => {
          const hasWrongDigit =
            mistakeIndexes?.filter(
              (mistake) =>
                mistake.squareRowIndex === index &&
                mistake.squareBlockIndex === subIndex
            ).length > 0
              ? true
              : false;
          return (
            <SquareBlock
              isDigitSelected={
                selectedDigit!== null && selectedDigit === subItem?.digit
              }
              hasWrongDigit={hasWrongDigit}
              selectedBlock={selectedBlock}
              handleBlockClick={() =>
                setSelectedBlock({
                  squareIndex: squareIndex,
                  squareRowIndex: index,
                  squareBlockIndex: subIndex,
                })
              }
              number={subItem?.digit}
              squareIndex={squareIndex}
              rowIndex={index}
              index={subIndex}
            />
          );
        });
      })}
    </div>
  );
};

export default SubSquare;
