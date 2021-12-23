const bigFatRocket = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Rocket");
  } else if (number % 3 === 0) {
    console.log("Big");
  } else if (number % 5 === 0) {
    console.log("Fat");
  } else {
    console.log(number);
  }
};

for (let i = 1; i <= 87; i++) {
  bigFatRocket(i);
}
