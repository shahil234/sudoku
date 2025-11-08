import React from "react";

const SquareBlock = ({
  number,
  index,
  squareIndex,
  rowIndex,
  handleBlockClick,
  selectedBlock,
  isDigitSelected,
  hasWrongDigit
}) => {
  const isSelected =
    selectedBlock.squareIndex === squareIndex &&
    selectedBlock.squareRowIndex === rowIndex &&
    selectedBlock.squareBlockIndex === index;
  return (
    <div style={{
      backgroundColor: hasWrongDigit ? "red" : ((isSelected || isDigitSelected) ? "#4ecf30" : "white")
    }} onClick={handleBlockClick} className="border">
      <span className=" text-2xl font-bold">{number !== null ? number + 1 : number}</span>
    </div>
  );
};

export default SquareBlock;
