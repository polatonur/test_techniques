const findMissingNumber = (arr) => {
  const sortedArray = arr.sort();
  let isMissing = false;
  console.log(sortedArray);
  for (let i = 1; i <= sortedArray[sortedArray.length - 1]; i++) {
    if (sortedArray.indexOf(i) === -1) {
      console.log(i);
      isMissing = true;
      break;
    }
  }
  if (!isMissing) {
    console.log(sortedArray[sortedArray.length - 1] + 1);
  }
};

findMissingNumber([1, 3, 5, 4]); // 2
findMissingNumber([6, 3, 4, 5, 2]); // 1
findMissingNumber([5, 3, 2, 1, 4]); // 6
