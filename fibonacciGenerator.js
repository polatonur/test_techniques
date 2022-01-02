function* fiboNacciGenerator(n) {
  const initial = [1, 1];
  let next = initial[initial.length - 1];

  while (initial.length < n) {
    yield initial;
    next = initial[initial.length - 1] + initial[initial.length - 2];
    initial.push(next);
  }
}

const iterator = fiboNacciGenerator(10);
console.table(iterator.next().value);
console.table(iterator.next().value);
console.table(iterator.next().value);
console.table(iterator.next().value);
console.table(iterator.next().value);
console.table(iterator.next().value);
