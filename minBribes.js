const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};

function minimumBribes(q) {
  // find  queue length
  const size = q.length;
  // create initile line
  let initialeLine = [...q].sort((a, b) => a - b);
  let bribe = 0;

  for (let i = size - 1; i >= 0; i--) {
    newIndex = q.indexOf(initialeLine[i]);
    const dif = newIndex - i;
    console.log(`${i + 1} has a dif ${dif}`);
    if (dif > 2 && newIndex - i < 0) {
      console.log("Too chaotic");
      return "Too chaotic";
    } else if (dif < 0) {
      bribe += Math.abs(dif);
      let temp = i + 1;
      q.splice(newIndex, 1);
      q.splice(newIndex + Math.abs(dif), 0, temp);
    }
  }
  if (true) l = 14;

  return bribe;
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
