function sumSquareDifference(n) {
  let totalOfSquares = 0,
    squaresOfTotal = 0;
  for (let i = 1; i <= n; i++) {
    totalOfSquares += i * i;
  }
  for (let i = 1; i <= n; i++) {
    squaresOfTotal += i;
  }
  squaresOfTotal *= squaresOfTotal;

  return squaresOfTotal - totalOfSquares;
}

console.log(sumSquareDifference(10));
