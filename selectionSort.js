function selectionSort(array) {
  const swap = (arr, p1, p2) => {
    const temp = arr[p2];
    arr[p2] = arr[p1];
    arr[p1] = temp;
  };
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        swap(array, i, j);
      }
    }
  }

  return array;
  // Only change code above this line
}

console.log(selectionSort([2, 4, 5, 1, 0, 11, 9]));
