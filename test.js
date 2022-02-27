const arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
const hourglassSum = (arr) => {
  const calHourGlassSum = (i, j, arr) => {
    return (
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2]
    );
  };
  let resultArr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  resultArr = resultArr.map((row, rowIndex) =>
    row.map((_, columnIndex) => calHourGlassSum(rowIndex, columnIndex, arr))
  );
  return Math.max(...resultArr.reduce((prev, curr) => prev.concat(curr), []));
};
console.log(hourglassSum(arr));
