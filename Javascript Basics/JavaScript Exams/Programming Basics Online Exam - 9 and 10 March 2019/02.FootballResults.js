function footBallResults(input) {
  let result = '';
  let countWin = 0;
  let countLost = 0;
  let countEqual = 0;
  let first = 0;
  let second = 0;

  for (let i = 0; i < 3; i++) {
    result = input[i];
    first = Number(result[0]);
    second = Number(result[2]);

    if (first > second) {
      countWin++;
    } else if (first < second) {
      countLost++;
    } else {
      countEqual++;
    }
  }

  console.log(`Team won ${countWin} games.`);
  console.log(`Team lost ${countLost} games.`);
  console.log(`Drawn games: ${countEqual}`);
}

footBallResults(['0:2', '0:1', '3:3']);
