function flippingMatrix(matrix) {
  let l = matrix.length;
  let n = l / 2;
  console.log("first");

  console.log(matrix);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < l; j++) {
      if (matrix[i][j] < matrix[l - i - 1][j]) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[l - i - 1][j];
        matrix[l - i - 1][j] = temp;
      }
    }
  }
  console.log("after");
  console.log(matrix);

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] < matrix[i][l - j - 1]) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][l - j - 1];
        matrix[i][l - j - 1] = temp;
      }
    }
  }
  return matrix;
}

console.log(
  flippingMatrix([
    [1, 23, 3, 12],
    [8, 5, 9, 0],
    [12, 78, 9, 21],
    [12, 3, 15, 19],
  ])
);

for (let k = 0; k < array.length; k++) {
  const element = array[k];
}
