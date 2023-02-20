function sumNumbers(input) {
  index = 0;
  const num = Number(input[index]);
  index++;

  let currNum = Number(input[index]);
  index++;
  let sum = currNum;

  while (sum < num) {
    currNum = Number(input[index]);
    sum += currNum;

    index++;
  }

  console.log(`${sum}`);
}

sumNumbers(['20', '1', '2', '3', '4', '5', '6']);
