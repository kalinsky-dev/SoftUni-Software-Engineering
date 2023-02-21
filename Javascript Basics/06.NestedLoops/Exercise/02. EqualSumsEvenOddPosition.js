function equalSumsEvenOddPosition(input) {
  const firstNum = Number(input[0]);
  const secondNum = Number(input[1]);

  let numString = '';
  let sumEvenNum = 0;
  let sumOddNum = 0;
  let result = '';

  for (let i = firstNum; i <= secondNum; i++) {
    numString = '' + i;
    for (let j = 0; j < 6; j++) {
      let charCurrentNum = numString[j];
      let currentNum = Number(charCurrentNum);
      if (j === 0 || j === 2 || j === 4) {
        sumOddNum += currentNum;
      } else {
        sumEvenNum += currentNum;
      }
    }
    if (sumOddNum === sumEvenNum) {
      result += numString + ' ';
    }
    sumEvenNum = 0;
    sumOddNum = 0;
  }
  console.log(result);
}

equalSumsEvenOddPosition(['100000', '100050']);
