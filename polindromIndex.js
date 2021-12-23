function palindromeIndex(s) {
  const isPolindrom = (str) => {
    console.log("str i s==>", str);
    return str.split("").reverse().join("") === str;
  };

  for (let k = 0; k < s.length; k++) {
    let original = s;
    console.log("s is", s);
    s = s.split("");
    s.splice(k, 1);
    console.log("after splice ", s);
    if (isPolindrom(s.join("")) === true) {
      return k;
      break;
    } else {
      s = original;
    }
  }
}

console.log(palindromeIndex("abab"));
