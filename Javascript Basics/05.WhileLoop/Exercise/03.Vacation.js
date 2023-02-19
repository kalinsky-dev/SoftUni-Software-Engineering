function vacation(input) {
  let index = 0;
  const moneyNeeded = Number(input[index]);
  index++;
  const moneyInCharge = Number(input[index]);
  index++;
  let currMoney = moneyInCharge;
  let command = input[index];
  let moneyToSpendOrSave = 0;
  let counterSpendMoney = 0;
  let countDays = 0;
  let haveTheMoney = true;

  while (currMoney < moneyNeeded) {
    countDays++;
    switch (command) {
      case 'spend':
        counterSpendMoney++;
        index++;
        moneyToSpendOrSave = Number(input[index]);
        if (moneyToSpendOrSave >= currMoney) {
          currMoney = 0;
        } else {
          currMoney -= moneyToSpendOrSave;
        }
        index++;
        command = input[index];
        break;
      case 'save':
        index++;
        moneyToSpendOrSave = Number(input[index]);
        currMoney += moneyToSpendOrSave;
        index++;
        command = input[index];
        break;
    }
    if (counterSpendMoney === 5) {
      console.log(`You can't save the money.`);
      console.log(`${countDays}`);
      haveTheMoney = false;
      break;
    }
    if (command !== 'spend' && command !== 'save') {
      break;
    }
  }
  if (haveTheMoney && currMoney >= moneyNeeded) {
    console.log(`You saved the money for ${countDays} days.`);
  } else if (haveTheMoney && currMoney < moneyNeeded) {
    console.log(`You can't save the money.`);
    console.log(`${countDays}`);
  }
}

// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
// vacation([
//   "110",
//   "60",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
// ]);
vacation(['250', '150', 'spend', '50', 'spend', '50', 'save', '100']);
