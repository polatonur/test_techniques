const race = (v1, v2, g) => {
  if (v1 >= v2) {
    return null;
  } else {
    let sec = (60 * 60 * g) / (v2 - v1);
    console.log(sec);
    let hour = Math.floor(sec / (60 * 60));
    let min = Math.floor((sec - hour * 3600) / 60);
    sec = Math.floor(sec - hour * 3600 - min * 60);
    return [hour, min, sec];
  }
};

console.log(race(720, 850, 70));
