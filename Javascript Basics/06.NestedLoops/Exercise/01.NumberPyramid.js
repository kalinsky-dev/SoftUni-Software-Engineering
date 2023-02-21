function numberPyramid(input) {
  const numberToStop = Number(input[0]);
  let currNum = 0;
  let result = '';
  let numberToStopIsFound = false;

  for (let row = 1; row <= numberToStop; row++) {
    for (let col = 1; col <= row; col++) {
      currNum++;
      if (currNum <= numberToStop) {
        result += currNum + ' ';
      } else {
        numberToStopIsFound = true;
        break;
      }
    }
    console.log(result.trim());
    result = '';
    if (numberToStopIsFound) {
      break;
    }
  }
}

numberPyramid(['7']);
