function maxNumber(input) {
  let index = 0;
  let command = input[index];
  let maxNumber = Number.MIN_SAFE_INTEGER;

  while (command !== 'Stop') {
    let currNum = Number(command);

    if (currNum > maxNumber) {
      maxNumber = currNum;
    }
    index++;
    command = input[index];
  }
  console.log(`${maxNumber}`);
}

maxNumber(['100', '99', '80', '70', 'Stop']);
