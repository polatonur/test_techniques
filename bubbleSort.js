function bubbleSort(array) {
  const swap = (arr, position1, position2) => {
    let temp = arr[position1];
    arr[position1] = arr[position2];
    arr[position2] = temp;
  };
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        console.log(array);
      }
    }
  }

  return array;
  // Only change code above this line
}

console.log(bubbleSort([2, 3, 9, 7, 1, 12]));
