import { useContext } from "react";
import { GameContext } from "./Board";
import Key from "./Key";
import { Trash2 } from "lucide-react";

const Keypad = () => {
  const { selectedBlock, setCurrentPuzzle, currentPuzzle } =
    useContext(GameContext);
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const isDefaultBlockSelected =
    currentPuzzle?.[selectedBlock.squareIndex]?.[selectedBlock.squareRowIndex]?.[
      selectedBlock.squareBlockIndex
    ]?.isDefault;

  const isKeypadDisable = (selectedBlock?.squareIndex !== null) ? false : true;

  const chooseNumber = (num) => {
    return () => {
      setCurrentPuzzle((prev) =>
        prev.map((square, squareIndex) => {
          if (squareIndex !== selectedBlock.squareIndex) {
            return square;
          } else {
            return square?.map((row, rowIndex) => {
              if (selectedBlock.squareRowIndex !== rowIndex) {
                return row;
              } else {
                return row?.map((item, index) => {
                  if (
                    selectedBlock?.squareBlockIndex !== index ||
                    item.isDefault
                  ) {
                    return item;
                  } else {
                    return {
                      digit: num,
                      isDefault: false,
                    };
                  }
                });
              }
            });
          }
        })
      );
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
