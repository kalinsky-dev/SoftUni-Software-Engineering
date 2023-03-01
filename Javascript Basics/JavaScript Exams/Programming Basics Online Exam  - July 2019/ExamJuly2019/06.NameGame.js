function nameGame(input) {
  let index = 0;
  let command = input[index];
  let currentName = '';
  let currentLength = 0;
  let winnerName = '';
  let winnerPoints = 0;
  let currentPoints = 0;
  let currentChar = '';
  let currentNumOfTheChar = 0;
  let currentNumOfTheNumbers = 0;

  while (command !== 'Stop') {
    currentName = command;
    index++;
    currentLength = currentName.length;
    for (let i = 0; i < currentLength; i++) {
      currentChar = currentName[i];
      currentNumOfTheChar = currentChar.charCodeAt(0);
      currentNumOfTheNumbers = Number(input[index]);

      if (currentNumOfTheChar === currentNumOfTheNumbers) {
        currentPoints += 10;
      } else {
        currentPoints += 2;
      }

      index++;
      command = input[index];
    }
    if (currentPoints >= winnerPoints) {
      winnerPoints = currentPoints;
      winnerName = currentName;
    }
    currentPoints = 0;
  }
  console.log(`The winner is ${winnerName} with ${winnerPoints} points!`);
}

// nameGame([
//   "Pesho",
//   "124",
//   "34",
//   "111",
//   "97",
//   "99",
//   "Gosho",
//   "98",
//   "124",
//   "88",
//   "76",
//   "18",
//   "Stop",
// ]);
nameGame(['Ivan', '73', '20', '98', '110', 'Ivo', '80', '65', '87', 'Stop']);
