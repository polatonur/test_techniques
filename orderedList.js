function solution(list) {
  list.sort((a, b) => a - b);
  const result = [];
  console.log(list);

  for (let i = 0; i < list.length; i++) {
    let nextValue = list[i] + 1;
    let range = [list[i]];

    for (let j = i + 1; j < list.length; j++) {
      if (nextValue === list[j]) {
        range.push(list[j]);
        nextValue++;
        if (j === list.length - 1) {
          if (range.length > 2) {
            console.log("1 range.length > 2");
            result.push(`${range[0]}-${range[range.length - 1]}`);
          } else {
            console.log("2 range.length < 2");
            result.concat([range[0], range[1]]);
          }
          i = list.length - 1;
        }
      } else {
        i = j - 1;
        if (range.length === 1) {
          console.log("3 range.length == 1");
          result.push(String(range[0]));
        } else if (range.length > 2) {
          console.log("4 range.length > 2");
          result.push(`${range[0]}-${range[range.length - 1]}`);
        } else {
          console.log("5 range.length = 2");
          result.push(String(range[0]));
          result.push(String(range[1]));
        }

        break;
      }
      console.log("range is ===>");
      console.log(range);
    }
  }
  return result.join(",");
}
console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
