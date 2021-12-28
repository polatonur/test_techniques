const Logger = require("nodemon/lib/utils/log");

function mix(s1, s2) {
  // const finalList = [];
  // finalWords = []
  // const result = [s1, s2].map((str) => {
  //   const list1 = str.match(/[a-z]/g);
  //   let filteredList = [];
  //   list1.forEach((element) => {
  //     filteredList.indexOf(element) === -1 && filteredList.push(element);
  //   });
  //   return filteredList
  //     .map((elem) => {
  //       const value = new RegExp(elem, "g");
  //       return [elem, str.match(value).length];
  //     })
  //     .filter((elem) => elem[1] > 1)
  //     .sort((a, b) => b[1] - a[1]);
  // });

  // result.forEach(list =>{
  //   list.forEach(word => {
  //     if(finalWords.indexOf(word[0] === -1){
  //       finalWords.push(word[0]);

  //     }
  //   })
  // })
  const result = [];
  const addedList = [];
  s1 = s1.match(/[a-z]/g).join("");
  s2 = s2.match(/[a-z]/g).join("");
  s1.split("").forEach((word) => {
    if (addedList.indexOf(word) === -1) {
      let text = new RegExp(word, "g");
      const count = s1.match(text).length;
      if (count > 1) {
        if (s2.indexOf(word) === -1) {
          result.push([1, ":", word.repeat(count)]);
          addedList.push(word);
        } else {
          addedList.push(word);
          const count2 = s2.match(text).length;

          count === count2
            ? result.push([0, ":", word.repeat(count)])
            : count > count2
            ? result.push([1, ":", word.repeat(count)])
            : result.push([2, ":", word.repeat(count2)]);
        }
      }
    }
  });
  s2.split("").forEach((word) => {
    if (addedList.indexOf(word) === -1) {
      let text = new RegExp(word, "g");
      const count = s2.match(text).length;
      if (count > 1) {
        if (s1.indexOf(word) === -1) {
          result.push([2, ":", word.repeat(count)]);
          addedList.push(word);
        } else {
          addedList.push(word);
          const count2 = s1.match(text).length;

          count === count2
            ? result.push([0, ":", word.repeat(count)])
            : count > count2
            ? result.push([2, ":", word.repeat(count)])
            : result.push([1, ":", word.repeat(count2)]);
        }
      }
    }
  });

  result.sort((a, b) => {
    if (b[2].length > a[2].length) {
      return 1;
    }
    if (b[2].length < a[2].length) {
      return -1;
    }

    if (b[0] > a[0]) {
      return 1;
    }
    if (b[0] < a[0]) {
      return -1;
    }

    if (b[2][0] > a[2][0]) {
      return -1;
    }
    if (b[2][0] < a[2][0]) {
      return 1;
    }
  });

  let final = "";
  result.forEach((list) => {
    final += list.join("") + "/";
  });

  console.log(result);
  return final.slice(0, final.length - 1).replace(/0/g, "=");
}

console.log(mix("looping is fun but dangerous", "less dangerous than coding"));
