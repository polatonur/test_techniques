function* fiboNacciGenerator() {
  const initial = [1, 1];
  let next = initial[initial.length - 1];

  while (true) {
    yield next;
    next = initial[initial.length - 1] + initial[initial.length - 2];
    initial.push(next);
  }
}
console.log(fiboNacciGenerator().next().value);
console.log(fiboNacciGenerator().next().value);
co;
