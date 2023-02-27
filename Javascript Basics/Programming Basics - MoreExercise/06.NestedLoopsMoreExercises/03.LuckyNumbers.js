function luckyNumbers(input) {
  const num = Number(input[0]);
  let result = '';
  for (let first = 1; first <= 9; first++) {
    for (let second = 1; second <= 9; second++) {
      for (let third = 1; third <= 9; third++) {
        for (let fourth = 1; fourth <= 9; fourth++) {
          let numTocheck = first + second;
          let numToCheck2 = third + fourth;
          if (num % numTocheck === 0 && numTocheck === numToCheck2) {
            result += '' + first + second + third + fourth + ' ';
          }
        }
      }
    }
  }
  console.log(result);
}

// luckyNumbers(["3"]);
// luckyNumbers(["7"]);
luckyNumbers(['24']);
