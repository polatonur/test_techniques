function largestPalindromeProduct(n) {
  const isPolindrom = (number) => {
    let temp = number;
    let kDigitNumber = 1;
    while (temp >= 10) {
      kDigitNumber++;
      temp /= 10;
    }
    if (kDigitNumber % 2 === 1) {
      return false;
    } else {
      const arrayOfDigits = [];
      for (let i = 0; i < kDigitNumber; i++) {
        let lastDigit = number % 10;
        arrayOfDigits.push(lastDigit);
        number = (number - lastDigit) / 10;
      }
      for (let k = 0; k < arrayOfDigits.length; k++) {
        if (arrayOfDigits[k] !== arrayOfDigits.reverse()[k]) {
          return false;
        }
      }
      return true;
    }
  };
  const polindromList = [];
  for (let i = Math.pow(10, n) - 1; i >= Math.pow(10, n - 1); i--) {
    for (let k = Math.pow(10, n) - 1; k >= Math.pow(10, n - 1); k--) {
      if (isPolindrom(i * k)) {
        polindromList.push(i * k);
      }
    }
  }
  return polindromList.sort()[polindromList.length - 1];
}

console.log(largestPalindromeProduct(2));
