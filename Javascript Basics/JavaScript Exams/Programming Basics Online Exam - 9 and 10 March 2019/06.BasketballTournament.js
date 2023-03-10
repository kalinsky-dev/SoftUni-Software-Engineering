function bascetBallTournament(input) {
  //     •	Име на турнира – текст
  // •	За всеки турнир n на брой мача – цяло число в интервала [1…15]
  // •	За всеки мач се четат по два реда:
  // o	Точки, вкарани от отбора на Деси – цяло число в интервала от [0…150]
  // o	Точки, вкарани от противниковия отбор – цяло число в интервала от [0…150]

  const length = Number(input.length);
  let nameOfMatch = '';
  let lengthOfMatch = 0;
  let count = 0;
  let countWhile = 0;
  let pointsOfDesi = 0;
  let pointsOfTheOpposite = 0;
  let numberOfMatch = 0;
  let diff = 0;
  let winMatches = 0;
  let loseMatches = 0;
  let matches = 0;

  while (countWhile < length) {
    nameOfMatch = input[countWhile];

    if (nameOfMatch === 'End of tournaments') {
      break;
    }

    lengthOfMatch = Number(input[countWhile + 1]);
    matches += lengthOfMatch;
    lengthOfMatch = 2 * lengthOfMatch;

    for (
      let i = countWhile + 2;
      i < countWhile + 2 + lengthOfMatch;
      i = i + 2
    ) {
      count = i;
      numberOfMatch++;

      pointsOfDesi = Number(input[i]);

      pointsOfTheOpposite = Number(input[i + 1]);

      diff = Math.abs(pointsOfDesi - pointsOfTheOpposite);
      if (pointsOfDesi > pointsOfTheOpposite) {
        winMatches++;
        console.log(
          `Game ${numberOfMatch} of tournament ${nameOfMatch}: win with ${diff} points.`
        );
      } else {
        loseMatches++;
        console.log(
          `Game ${numberOfMatch} of tournament ${nameOfMatch}: lost with ${diff} points.`
        );
      }
    }
    numberOfMatch = 0;
    pointsOfDesi = 0;
    pointsOfTheOpposite = 0;
    countWhile = count + 2;
  }
  winMatches = (winMatches / matches) * 100;
  loseMatches = (loseMatches / matches) * 100;
  console.log(`${winMatches.toFixed(2)}% matches win`);
  console.log(`${loseMatches.toFixed(2)}% matches lost`);
}

bascetBallTournament([
  'Dunkers',
  '2',
  '75',
  '65',
  '56',
  '73',
  'Fire Girls',
  '3',
  '67',
  '34',
  '83',
  '98',
  '66',
  '45',
  'End of tournaments',
]);

// bascetBallTournament([
//   "Ballers",
//   "3",
//   "87",
//   "63",
//   "56",
//   "65",
//   "75",
//   "64",
//   "Sharks",
//   "4",
//   "64",
//   "76",
//   "65",
//   "86",
//   "68",
//   "99",
//   "45",
//   "78",
//   "End of tournaments",
// ]);
