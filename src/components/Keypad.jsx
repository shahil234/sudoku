import { useContext } from "react";
import { GameContext } from "./Board";
import Key from "./Key";

const Keypad = () => {
  const { selectedBlock, setCurrentPuzzle } = useContext(GameContext);
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const isKeypadDisable = selectedBlock?.squareIndex !== null ? false : true;

  console.log(isKeypadDisable, "inside key");
  const chooseNumber = (num) => {
    return () => {
      setCurrentPuzzle((prev) => {
        const updatedPuzzle = prev.map((square, squareIndex) => {
            if(squareIndex !== selectedBlock.squareIndex) {
                return square;
            } else {
                return square?.map((row, rowIndex) => {
                    if(selectedBlock.squareRowIndex !== rowIndex) {
                        return row;
                    } else {
                        return row?.map((item, index) => {
                            if(selectedBlock?.squareBlockIndex !== index) {
                                return item;
                            } 

                            return num;
                        })
                    }
                })
            }
        });

        return updatedPuzzle;
      });
    };
  };

  if (isKeypadDisable) return null;
  return (
    <div className="max-w-md">
      <div className="space-x-2">
        {options?.map((item, index) => (
          <Key onClick={chooseNumber(item)} item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Keypad;
