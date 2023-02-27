function passwordGenerator(input) {
  const n = Number(input[0]);
  const l = Number(input[1]);
  let result = '';

  for (let firstNum = 1; firstNum <= n; firstNum++) {
    for (let secondNum = 1; secondNum <= n; secondNum++) {
      for (let thirdNum = 97; thirdNum < 97 + l; thirdNum++) {
        for (let fourthNum = 97; fourthNum < 97 + l; fourthNum++) {
          for (let fifthNum = 1; fifthNum <= n; fifthNum++) {
            let charThirdNum = String.fromCharCode(thirdNum);
            let charFourthNum = String.fromCharCode(fourthNum);
            if (fifthNum > firstNum && fifthNum > secondNum) {
              result +=
                '' +
                firstNum +
                secondNum +
                charThirdNum +
                charFourthNum +
                fifthNum +
                ' ';
            }
          }
        }
      }
    }
  }
  console.log(result);
}

// passwordGenerator(["2", "4"]);
// passwordGenerator(["3", "1"]);
// passwordGenerator(["3", "2"]);
passwordGenerator(['4', '2']);
