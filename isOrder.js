function gridChallenge(grid) {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("").sort().join("");
  }
  console.log(grid);
  let result = true;
  for (let i = 0; i < grid.length; i++) {
    console.log(grid[i]);
    let temp = [];
    for (let j = 0; j < grid.length; j++) {
      temp.push(grid[j][i]);
    }
    let sortedTemp = [...temp];
    sortedTemp.sort();
    console.log("temp");
    console.log(temp);
    console.log("sorted");
    console.log(sortedTemp);
    for (let k = 0; k < temp.length; k++) {
      console.log(temp[k], sortedTemp[k]);
      if (temp[k] !== sortedTemp[k]) {
        return false;
      } else {
      }
    }
    temp = [];
  }
  return true;
}

console.log(gridChallenge(["mpxz", "abcd", "flmw"]));
