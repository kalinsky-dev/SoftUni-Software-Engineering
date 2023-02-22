function sumOfTwoNumbers(input) {
  const startNum = Number(input[0]);
  const stopNum = Number(input[1]);
  const magicNum = Number(input[2]);

  let count = 0;
  let foundCombination = false;

  for (let i = startNum; i <= stopNum; i++) {
    for (let j = startNum; j <= stopNum; j++) {
      count++;
      if (i + j === magicNum) {
        console.log(`Combination N:${count} (${i} + ${j} = ${i + j})`);
        foundCombination = true;
        break;
      }
    }
    if (foundCombination) {
      break;
    }
  }
  if (!foundCombination) {
    console.log(`${count} combinations - neither equals ${magicNum}`);
  }
}

sumOfTwoNumbers(['1', '10', '5']);
