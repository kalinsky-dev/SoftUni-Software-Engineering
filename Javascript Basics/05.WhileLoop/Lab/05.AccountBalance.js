function accountBalance(input) {
  let index = 0;
  let command = input[index];
  index++;
  let sum = 0;
  let currMoney = 0;

  while (command !== 'NoMoreMoney') {
    currMoney = Number(command);
    if (currMoney < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    console.log(`Increase: ${currMoney.toFixed(2)}`);
    sum += currMoney;

    command = input[index];
    index++;
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(['120', '45.55', '-150']);
