function quickSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const pivot = array[0];
    const right = [];
    const left = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > pivot) {
        right.push(array[i]);
      } else {
        left.push(array[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }

  // Only change code below this line
  return array;
  // Only change code above this line
}

console.log(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

var unsorted = [23, 45, 16, 37, 3, 99, 22];
var sorted = quicksort(unsorted);

console.log("Sorted array", sorted);
