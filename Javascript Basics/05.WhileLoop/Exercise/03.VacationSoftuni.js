function vacation(input) {
  let budget = Number(input[0]);
  let cash = Number(input[1]);
  let daysCounter = 0;
  let spendCounter = 0;
  let sum = 0;
  data = input.length;
  index = 2;
  while (index < data) {
    switch (input[index]) {
      case 'spend':
        index++;
        sum -= Number(input[index]);
        spendCounter++;
        break;
      case 'save':
        index++;
        sum += Number(input[index]);
        break;
    }
    daysCounter++;
    index++;
  }
  if (spendCounter >= 5) {
    console.log(`You can't save the money.`);
    console.log(daysCounter);
  } else {
    console.log(`You saved the money for ${daysCounter} days.`);
  }
}
