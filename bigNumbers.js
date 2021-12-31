function add(a, b) {
  let max = b;
  let min = a;
  if (a.length > b.length) {
    max = a;
    min = b;
  }
  min = min.split("");
  min = Array(max.length - min.length)
    .fill(0)
    .concat(min)
    .join("");

  console.log(max, min);
  let remain = 0;
  let result = [];
  for (let i = max.length - 1; i >= 0; i--) {
    let total = (Number(max[i]) + Number(min[i]) + remain) % 10;
    remain = Math.floor((Number(max[i]) + Number(min[i]) + remain) / 10);
    console.log(total);
    result.push(total);
  }
  if (remain !== 0) {
    result.push(remain);
  }

  return result.reverse().join("");
}

console.log(add("1", "1123"));
