function primePairs(input) {
  const startNumFirst = Number(input[0]);
  const startNumSecond = Number(input[1]);
  const num1 = Number(input[2]);
  const num2 = Number(input[3]);
  const endNumFirst = startNumFirst + num1;
  const endNumSecond = startNumSecond + num2;

  let searchedNum = true;

  for (let firstNum = startNumFirst; firstNum <= endNumFirst; firstNum++) {
    for (
      let secondNum = startNumSecond;
      secondNum <= endNumSecond;
      secondNum++
    ) {
      for (let del = 2; del <= 9; del++) {
        if (firstNum % del === 0 || secondNum % del === 0) {
          searchedNum = false;
          break;
        }
      }
      if (searchedNum) {
        console.log(`${firstNum}${secondNum}`);
      }
      searchedNum = true;
    }
  }
}

// primePairs(["10", "20", "5", "5"]);
primePairs(['10', '30', '9', '6']);
