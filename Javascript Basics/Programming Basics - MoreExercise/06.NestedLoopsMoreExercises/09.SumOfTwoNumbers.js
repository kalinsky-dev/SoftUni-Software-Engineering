function sumOfTwoNumbers(input) {
  const startNum = Number(input[0]);
  const endNum = Number(input[1]);
  const magicNum = Number(input[2]);
  let counter = 0;
  let checkNum = false;

  for (let i = startNum; i <= endNum; i++) {
    for (let j = startNum; j <= endNum; j++) {
      counter++;
      if (i + j === magicNum) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
        checkNum = true;
      }
    }
    if (checkNum === true) {
      break;
    }
  }
  if (checkNum === false) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}

// sumOfTwoNumbers(["1", "10", "5"]);
// sumOfTwoNumbers(["23", "24", "20"]);
// sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(['88', '888', '2000']);
