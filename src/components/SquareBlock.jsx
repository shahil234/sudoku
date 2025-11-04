import React from "react";

const SquareBlock = ({
  number,
  index,
  squareIndex,
  rowIndex,
  handleBlockClick,
  selectedBlock,
}) => {
  const isSelected =
    selectedBlock.squareIndex === squareIndex &&
    selectedBlock.squareRowIndex === rowIndex &&
    selectedBlock.squareBlockIndex === index;
  return (
    <div style={{
      backgroundColor: isSelected ? "green" : "white"
    }} onClick={handleBlockClick} className="border">
      <span className=" text-2xl font-bold">{number}</span>
    </div>
  );
};

export default SquareBlock;
