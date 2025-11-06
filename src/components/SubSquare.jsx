import { useContext } from "react";
import SquareBlock from "./SquareBlock";
import { GameContext } from "./Board";

const SubSquare = ({ elementArr, squareIndex }) => {
  const { selectedBlock, setSelectedBlock } = useContext(GameContext);
  return (
    <div className="grid grid-cols-3 grid-rows-3 border-2">
      {elementArr?.map((item, index) => {
        return item?.map((subItem, subIndex) => {
          return (
            <SquareBlock
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
