import { useContext } from "react";
import { GameContext } from "./Board";
import Key from "./Key";
import { Puzzle, Trash2 } from "lucide-react";

import WinningSound from "../../public/right.mp3";
import LoosingSound from "../../public/wrong.mp3";

const Keypad = () => {
  const {
    selectedBlock,
    setCurrentPuzzle,
    currentPuzzle,
    puzzleSolution,
    setPuzzleMistake,
    puzzleMistake,
  } = useContext(GameContext);
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const isDefaultBlockSelected =
    currentPuzzle?.[selectedBlock.squareIndex]?.[
      selectedBlock.squareRowIndex
    ]?.[selectedBlock.squareBlockIndex]?.isDefault;

  const isKeypadDisable = selectedBlock?.squareIndex !== null ? false : true;

  const chooseNumber = (num) => {
    return () => {
      setCurrentPuzzle((prev) =>
        prev.map((square, squareIndex) =>
          squareIndex !== selectedBlock.squareIndex
            ? square
            : square.map((row, rowIndex) =>
                rowIndex !== selectedBlock.squareRowIndex
                  ? row
                  : row.map((block, blockIndex) => {
                      return blockIndex !== selectedBlock.squareBlockIndex ||
                        block.isDefault
                        ? block
                        : { digit: num, isDefault: false };
                    })
              )
        )
      );

      const isCorrect =
        puzzleSolution?.[selectedBlock.squareIndex][
          selectedBlock.squareRowIndex
        ][selectedBlock.squareBlockIndex].digit === num;

      let sound;
      if (!isCorrect) {
        sound = new Audio(LoosingSound);
        sound.play();
        setPuzzleMistake((prev) => [
          ...prev,
          {
            squareIndex: selectedBlock.squareIndex,
            squareRowIndex: selectedBlock.squareRowIndex,
            squareBlockIndex: selectedBlock.squareBlockIndex,
          },
        ]);
      } else {
        sound = new Audio(WinningSound)
      }

      sound.play();
    };
  };

  const removeNumber = () => {
    setCurrentPuzzle((prev) =>
      prev.map((square, squareIndex) =>
        squareIndex !== selectedBlock.squareIndex
          ? square
          : square.map((row, rowIndex) =>
              rowIndex !== selectedBlock.squareRowIndex
                ? row
                : row.map((block, blockIndex) =>
                    blockIndex !== selectedBlock.squareBlockIndex
                      ? block
                      : block.isDefault
                      ? block
                      : { digit: null, isDefault: false }
                  )
            )
      )
    );

    const wasWrongDigit = puzzleMistake.filter(
      (item) =>
        item.squareIndex === selectedBlock.squareIndex &&
        item.squareRowIndex === selectedBlock.squareRowIndex &&
        item.squareBlockIndex === selectedBlock.squareBlockIndex
    )[0];
    console.log("yes this was a wrong number", wasWrongDigit);
    if (wasWrongDigit) {
      setPuzzleMistake((prev) =>
        prev.filter(
          (item) =>
            item.squareIndex !== selectedBlock.squareIndex &&
            item.squareRowIndex !== selectedBlock.squareRowIndex &&
            item.squareBlockIndex !== selectedBlock.squareBlockIndex
        )
      );
    }
  };

  if (isKeypadDisable || isDefaultBlockSelected) return null;
  return (
    <div className="max-w-md">
      <div className="space-x-2">
        {options?.map((item, index) => (
          <Key onClick={chooseNumber(item)} item={item} key={index} />
        ))}
      </div>
      <div>
        <button
          className="px-8 py-4 bg-blue-500 rounded-md "
          onClick={removeNumber}
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default Keypad;
