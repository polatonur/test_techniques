function nthPrime(n) {
  if (n === 1) {
    return 2;
  }

  const primeNumberList = [2];
  let start = 3;
  while (primeNumberList.length !== n) {
    let isPrime = true;
    for (let i = 0; i < primeNumberList.length; i++) {
      if (start % primeNumberList[i] === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log("Prime==>", start);
    } else {
    }
    start += 2;
  }

  return primeNumberList[primeNumberList.length - 1];
}

console.log(nthPrime(100));
