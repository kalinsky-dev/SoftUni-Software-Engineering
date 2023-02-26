function equalPairs(input) {
  let index = 0;
  const countPairs = Number(input[index]);
  index++;
  let firstNum = 0;
  let secontNum = 0;
  let currSum = 0;
  let sum = 0;
  let countEqual = 0;
  let diff = 0;
  let currDiff = 0;
  let isEqual = true;

  for (let i = 0; i < countPairs; i++) {
    firstNum = Number(input[index]);
    index++;
    secontNum = Number(input[index]);
    index++;
    currSum = firstNum + secontNum;
    if (currSum !== sum && i >= 1) {
      isEqual = false;
      currDiff = Math.abs(sum - currSum);
      sum = currSum;
      if (currDiff > diff) {
        diff = currDiff;
      }
    } else if (currSum !== sum && i < 1) {
      sum = currSum;
    } else if (currSum === sum && i >= 1 && isEqual !== false) {
      countEqual++;
    }
  }
  if (isEqual === true) {
    console.log(`Yes, value=${sum}`);
  } else {
    console.log(`No, maxdiff=${diff}`);
  }
}

equalPairs(['2', '-1', '2', '0', '-1']);
