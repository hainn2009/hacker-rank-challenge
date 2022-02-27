// const ar = [1, 2, 3, 4, 5, 6];
const k = 5;

let ar =
  "50 44 77 66 70 58 9 59 74 82 87 15 10 95 10 81 2 4 87 85 28 96 76 18 86 91 94 59 19 58 98 48 38 70 36 38 66 9 72 54 23 23 17 18 8 16 9 56 12 59 73 31 10 62 83 84 28 91 29 22 73 22 3 75 26 31 93 57 15 32 46 74 99 10 15 58 60 53 41 49 71 59 4 20 38 78 1 94 76 5 70 68 42 34 77 28 19 25 20 15";
ar = ar.split(" ").map((i) => Number(i));
const divisibleSumPairs = (ar, k) => {
  return ar.reduce(
    (sum, i) =>
      sum +
      ar.reduce((sum, j) => (i < j && (i + j) % k === 0 ? sum + 1 : sum), 0),
    0
  );
};
let ar1 =
  "85 42 54 62 79 71 29 61 1 92 93 99 82 5 45 55 49 49 93 45 2 53 80 68 51 15 42 8 5 45 95 90 4 5 45 56 20 66 32 65 11 48 41 10 92 41 8 23 88 50 90 2 3 88 29 34 54 83 91 37 95 11 7 48 96 2 84 50 20 97 95 85 80 87 99 34 40 33 78 6 58 82 49 37 35 12 85 73 96 7 63 36 73 3 96 23 5 75 16 41";
ar1 = ar1.split(" ").map((i) => Number(i));

console.log(divisibleSumPairs(ar1, 77));
// console.log();
// ket qua mong doi la 69 nhung ket qua minh tinh ra la 68, chua tim ra nguyen nhan tai sao
