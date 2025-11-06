const getSquareGroup = (puzzleArr) => {
  const output = [[], [], [], [], [], [], [], [], []];
  const groupOfThree = [];

  puzzleArr.forEach((num, index) => {
    const groupIndex = Math.ceil((index + 1) / 3) - 1;

    groupOfThree[groupIndex] = groupOfThree[groupIndex]?.length
      ? [...groupOfThree[groupIndex], num]
      : [num];
  });

  for (let i = 1; i <= groupOfThree.length; i++) {
    let squareIndex = ((i - 1) % 3) + 1;

    if (output[squareIndex - 1]?.length < 3) {
      output[squareIndex - 1] = [
        ...output[squareIndex - 1],
        groupOfThree[i - 1],
      ];
    } else {
      if (output[squareIndex - 1 + 3]?.length < 3) {
        output[squareIndex - 1 + 3] = [
          ...output[squareIndex - 1 + 3],
          groupOfThree[i - 1],
        ];
      } else {
        output[squareIndex - 1 + 6] = [
          ...output[squareIndex - 1 + 6],
          groupOfThree[i - 1],
        ];
      }
    }
  }

  const groupedOutput = output.map((item) =>
    item.map((subItem) =>
      subItem.map((digit) => ({ digit, isDefault: digit !== null }))
    )
  );
  return groupedOutput;
};

export { getSquareGroup };
