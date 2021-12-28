const fibonacci = (number) => {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
};

const fibArry = (n) => {
  const values = [];
  for (let i = 0; i < n; i++) {
    const value = fibonacci(i);
    values.push(value);
  }
  return values;
};

console.log(fibArry(10));
