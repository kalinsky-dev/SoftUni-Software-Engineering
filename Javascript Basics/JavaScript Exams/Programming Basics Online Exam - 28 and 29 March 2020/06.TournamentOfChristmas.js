function tournamentOfChristmas(input) {
  //     Първоначално от конзолата се прочита броя дни на турнира – цяло число в интервала [1… 20]
  // До получаване на командата "Finish" се чете:
  // •	Спорт  – текст
  // За всеки спорт се прочита:
  // o	Резултат  – текст с възможности: "win" или "lose"

  let index = 0;
  const countDays = Number(input[index]);
  index++;

  let command = '';
  let currMoney = 0;
  let allMoney = 0;
  let winGames = 0;
  let loseGames = 0;

  let countWinGames = 0;
  let countLoseGames = 0;

  for (let i = 1; i <= countDays; i++) {
    command = input[index];
    while (command !== 'Finish') {
      index++;
      command = input[index];

      switch (command) {
        case 'win':
          winGames++;
          currMoney += 20;
          break;
        case 'lose':
          loseGames++;
          break;
      }
      index++;
      command = input[index];
    }
    index++;
    command = input[index];

    if (winGames > loseGames) {
      countWinGames++;
      currMoney *= 1.1;
    } else {
      countLoseGames++;
    }

    allMoney += currMoney;
    currMoney = 0;
    winGames = 0;
    loseGames = 0;
  }
  if (countWinGames > countLoseGames) {
    allMoney *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${allMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${allMoney.toFixed(2)}`
    );
  }
}

// tournamentOfChristmas([
//   "2",
//   "volleyball",
//   "win",
//   "football",
//   "lose",
//   "basketball",
//   "win",
//   "Finish",
//   "golf",
//   "win",
//   "tennis",
//   "win",
//   "badminton",
//   "win",
//   "Finish",
// ]);

tournamentOfChristmas([
  '3',
  'darts',
  'lose',
  'handball',
  'lose',
  'judo',
  'win',
  'Finish',
  'snooker',
  'lose',
  'swimming',
  'lose',
  'squash',
  'lose',
  'table tennis',
  'win',
  'Finish',
  'volleyball',
  'win',
  'basketball',
  'win',
  'Finish',
]);
