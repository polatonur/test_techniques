function sumPairs(ints, s) {
  let numbers = [];
  let list = [];
  let limit = ints.length;
  for (let i = 0; i < ints.length; i++) {
    let needed = s - ints[i];
    if (list.indexOf(needed) !== -1) {
      return [needed, ints[i]];
    }
    list.push(ints[i]);
  }

  return undefined;
}

console.log(sumPairs([4, -2, 3, 4, 3, 12], 8));
