const numberToPrice = function (number) {
  console.log(typeof number);
  if (isNaN(number)) {
    return number;
  }
  if (typeof number !== "number") {
    return "NaN";
  } else {
    if (number < 0) {
      prefix = "-";
      number = String(number).slice(1);
    } else {
      prefix = "";
    }

    if (String(number).indexOf(".") !== -1) {
      let [beforeComa, afterComa] = String(number).split(".");
      console.log(beforeComa);
      afterComa.length < 2
        ? (afterComa = afterComa + "0")
        : (afterComa = afterComa.slice(0, 2));
      let beforeComa2 = String(beforeComa)
        .split("")
        .reverse()
        .map((elem, i) => {
          console.log(elem, i, String(beforeComa).length - 1);
          if ((i + 1) % 3 === 0 && i !== String(beforeComa).length - 1) {
            return "," + elem;
          } else {
            return elem;
          }
        });
      console.log(beforeComa2);
      beforeComa2 = beforeComa2.reverse().join("");
      console.log(beforeComa2);
      return prefix + beforeComa2 + "." + afterComa;
    } else {
      return (
        prefix +
        String(number)
          .split("")
          .reverse()
          .map((elem, i) => {
            console.log(elem, 1);
            if ((i + 1) % 3 === 0 && String(number).length - 1) {
              return "," + elem;
            } else {
              return elem;
            }
          })
          .reverse()
          .join("") +
        ".00"
      );
    }
  }
};
console.log(numberToPrice(100.5));
