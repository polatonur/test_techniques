const delNth = (arr, n) => {
  const list = [];
  for (let i = 0; i < arr.length; i++) {
    if (list.filter((e) => e === arr[i]).length < n) {
      list.push(arr[i]);
    }
  }
  return list;
};

console.log(delNth([1, 3, 1, 3, 7, 2, 2, 2, 2], 3));
