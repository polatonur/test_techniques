function largestPrimeFactor(number) {
  const primeFactors = [];

  //   find prime numbers 0 - 100
  let basicPrimes = [2];
  let n = 3;
  while (n < 100) {
    let isPrime = true;
    for (let i = 0; i < basicPrimes.length; i++) {
      if (n % basicPrimes[i] === 0) {
        isPrime = false;
      }
    }
    isPrime && basicPrimes.push(n);
    n += 2;
  }

  for (let i = 0; i < basicPrimes.length; i++) {
    while (number % basicPrimes[i] === 0) {
      if (primeFactors.indexOf(basicPrimes[i]) === -1) {
        primeFactors.push(basicPrimes[i]);
      }
      number = number / basicPrimes[i];
    }
    if (number === 1) {
      break;
    }
  }
  console.log(number);
  k = 97;
  while (k < number) {
    let isPrime = true;
    for (let i = 0; i < basicPrimes.length; i++) {
      if (k % basicPrimes[i] === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      //   console.log(`primes===> ${k}`);
      while (number % k === 0) {
        if (primeFactors.indexOf(k) === -1) {
          primeFactors.push(k);
        }
        number = number / k;
        console.log(` numbers==> ${number}`);
        if (number === 1) {
          break;
        }
      }
      if (number === 1) {
        break;
      }
    }
    if (number === 1) {
      break;
    }
    k += 2;
    if (k === number) {
      primeFactors.push(k);
    }
  }

  return primeFactors[primeFactors.length - 1];
}

largestPrimeFactor(600851475143);
