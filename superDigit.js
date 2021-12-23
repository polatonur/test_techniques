function superDigit(n, k) {
  if (k === 1 && n.length === 1) {
    return Number(n);
  }
  let res = 0;
  for (let i = 0; i < n.length; i++) {
    res += Number(n[i]);
  }
  return superDigit(String(res * k), 1);
}

console.log(superDigit("148", 3));
