function mergeSort(array) {
  function merger(arr1, arr2) {
    let i = 0,
      j = 0,
      mergedArr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        mergedArr.push(arr2[j++]);
      } else {
        mergedArr.push(arr1[i++]);
      }
    }
    while (i < arr1.length) {
      mergedArr.push(arr1[i++]);
    }
    while (j < arr2.length) {
      mergedArr.push(arr2[j++]);
    }
    return mergedArr;
  }

  const left = [];
  const right = [];
  for (let i = 0; i < array.length; i++) {
    if (i > array.length / 2 - 1) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  left.length > 1 && mergeSort(left);
  right.length > 1 && mergeSort(right);

  if (left.length === 1 && right.length === 1) {
    sort(left, right);
  }
  return array;
  // Only change code above this line
}
