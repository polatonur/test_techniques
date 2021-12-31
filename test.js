const func = (str) => {
  let maxLetter = str[0];
  let maxCount = 1;
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      str[i] === str[j] && count++;
    }
    if (count > maxCount) {
      (maxCount = count), (maxLetter = str[i]);
    } else if (count === maxCount) {
      maxLetter > str[i] ? (maxLetter = str[i]) : (maxLetter = maxLetter);
    }
    count = 0;
  }
  return [maxLetter, maxCount];
};

console.log(func("bbbcdauhyabaya"));
