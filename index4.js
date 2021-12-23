const anagram = (str1, str2) => {
  str1 = str1.toLowerCase().replace(/" "/g, "").split("").sort();
  str2 = str2.toLowerCase().replace(/" "/g, "").split("").sort();
  if (str1.length !== str2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (str2[i] !== str1[i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(anagram("Ironique", "Onirique"));
console.log(anagram("Chien", "Chine"));
console.log(anagram("Pascal Obispo", "Pascal au bistrot"));
console.log(anagram("Pascal Obispo", "Pablo Picasso"));
