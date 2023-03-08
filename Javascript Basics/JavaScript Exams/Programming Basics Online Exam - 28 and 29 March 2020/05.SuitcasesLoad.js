function suitcasesLoad(input) {
  //     •	Капацитетът на багажника – реално число в диапазона [100.0…6000.0]
  // След това до получаване на команда "End" или до запълване на багажника, се чете по един ред:
  // o	Обем на куфар – реално число в диапазона [100.0…6000.0]

  index = 0;
  let capacityLuggageAvailable = Number(input[index]);
  index++;

  let command = input[index];
  let countLuggage = 0;
  let currLuggage = 0;
  let allLuggage = 0;

  while (command !== 'End') {
    currLuggage = Number(command);
    if (countLuggage % 3 === 0) {
      currLuggage *= 1.1;
    }
    capacityLuggageAvailable -= currLuggage;
    if (capacityLuggageAvailable < 0) {
      console.log(`No more space!`);
      break;
    }
    countLuggage++;
    allLuggage += currLuggage;
    index++;
    command = input[index];
  }
  if (command === 'End') {
    console.log(`Congratulations! All suitcases are loaded!`);
  }
  console.log(`Statistic: ${countLuggage} suitcases loaded.`);
}

// suitcasesLoad(["550", "100", "252", "72", "End"]);
// suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(['1200.2', '260', '380.5', '125.6', '305', 'End']);
