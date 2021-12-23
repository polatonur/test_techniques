function insertionSort(array) {
  let count = 0;
  const swap = (arr, p1, p2) => {
    count++;
    const temp = arr[p2];
    arr[p2] = arr[p1];
    arr[p1] = temp;
    console.log(`${count}===>${arr}`);
  };
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        console.log(array[j - 1], array[j]);
        swap(array, j - 1, j);
      }
    }
  }
  return array;
  // Only change code above this line
}

console.log(insertionSort([5, 4, 33, 2, 8]));
