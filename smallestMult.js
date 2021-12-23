function smallestMult(n) {
  const numbers = [];
  for (let i = 2; i <= n; i++) {
    console.log(i);
    for (let k = 0; k < numbers.length; k++) {
      console.log("++++");
      if (i % numbers[k] == 0) {
        console.log("found==>", i);
        console.log(numbers);
        numbers.splice(k, 1, i);
        console.log(numbers);
        break;
      }
    }
    numbers.indexOf(i) === -1 && numbers.push(i);
    if (numbers.length === 0) {
      numbers.push(i);
    }
  }
  let total = 1;
  for (let j = 0; j < numbers.length; j++) {
    total *= numbers[j];
  }
  console.log(numbers);
  console.log(total);
}

smallestMult(7);
