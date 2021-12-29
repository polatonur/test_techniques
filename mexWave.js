function wave(str) {
  let result = [];
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        result.push(
          str.slice(0, i) +
            str.slice(i)[0].toUpperCase() +
            str.slice(i, str.length).slice(1)
        );
      }
    }
    return result;
  } else {
    return [];
  }
}

console.log(wave("two words"));
