const productFib = (number) => {
  const fib = (n) => {
    return n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);
  };
  let result = 0;
  let start = 0;
  while (result <= number) {
    result = fib(start) * fib(start + 1);
    if (result === number) {
      return [fib(start), fib(start + 1), true];
    } else if (number < result) {
      return [fib(start), fib(start + 1), false];
    } else {
      start++;
    }
  }
};

console.log(productFib(120));
