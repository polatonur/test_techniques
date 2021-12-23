const myProcessor = (arr) => {
  const result = [];
  let neededProcessTime = 0;
  arr.forEach((element) => {
    neededProcessTime += element.process;
  });
  console.log(neededProcessTime);
  let turn = 0;
  while (neededProcessTime > 0) {
    console.log("nedded time is ==>", neededProcessTime);
    turn++;
    let processCanStar = arr.filter(
      (elem) => elem.delay === 0 && elem.process !== 0
    );
    console.log("starting");
    console.log(processCanStar);
    if (processCanStar.length === 0) {
      result.push("Waiting...");
      arr.forEach((elem) => {
        if (elem.process !== 0) {
          elem.delay--;
        }
      });
    } else {
      // find Priority between Process
      processCanStar = processCanStar.sort((a, b) => b.process - a.process);
      console.log(processCanStar);
      const nextProcess = processCanStar[0];
      // console.log("next is ==>");
      // console.log(nextProcess);
      console.log("pushing");
      result.push(nextProcess.pid);
      neededProcessTime--;
      arr[nextProcess.pid - 1].process--;

      arr.forEach((element) => {
        if (element.process !== 0) {
          element.delay > 0 && element.delay--;
        }
      });
    }
    // if (turn === 6) {
    //   break;
    // }
    console.log(arr);
  }
  return result;
};

const p1 = {
  pid: 1,
  delay: 2,
  process: 5,
};
const p2 = {
  pid: 2,
  delay: 4,
  process: 2,
};
const p3 = {
  pid: 3,
  delay: 2,
  process: 6,
};

console.log(myProcessor([p1, p2, p3]));
