function largestProductinaSeries(n) {
  let thousandDigits = [
    7, 3, 1, 6, 7, 1, 7, 6, 5, 3, 1, 3, 3, 0, 6, 2, 4, 9, 1, 9, 2,
  ];

  const results = [];
  for (let i = 0; i < thousandDigits.length - n + 1; i++) {
    let calculate = 1;
    for (let j = 0; j < n; j++) {
      calculate *= thousandDigits[i + j];
    }
    results.push(calculate);
  }
  console.log(
    results.sort((a, b) => {
      return b - a;
    })[0]
  );
  return results.sort()[0];
}

console.log(largestProductinaSeries(4));
