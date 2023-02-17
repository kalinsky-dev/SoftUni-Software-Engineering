function tennisRanklist(input) {
  //     •	Брой турнири, в които е участвал – цяло число в интервала [1…20]
  // •	Начален брой точки в ранглистата - цяло число в интервала [1...4000]
  // За всеки турнир се прочита отделен ред:
  // •	Достигнат етап от турнира – текст – "W", "F" или "SF"
  let index = 0;
  const countTurnir = Number(input[index]);
  index++;
  let points = Number(input[index]);
  index++;
  let currPointsW = 0;
  let currPointsF = 0;
  let currPointsSF = 0;
  let pointAverage = 0;
  let countWin = 0;

  //   	W - ако е победител получава 2000 точки
  // 	F - ако е финалист получава 1200 точки
  // 	SF - ако е полуфиналист получава 720 точки

  for (let i = 0; i < countTurnir; i++) {
    let typeTurnir = input[index];
    switch (typeTurnir) {
      case 'W':
        currPointsW += 2000;
        points += 2000;
        countWin++;
        break;
      case 'F':
        currPointsF += 1200;
        points += 1200;
        break;
      case 'SF':
        currPointsSF += 720;
        points += 720;
        break;
    }
    index++;
  }

  pointAverage = currPointsF + currPointsSF + currPointsW;
  let percentageWin = (countWin / countTurnir) * 100;
  console.log(`Final points: ${points}`);
  console.log(`Average points: ${Math.floor(pointAverage / countTurnir)}`);
  console.log(`${percentageWin.toFixed(2)}%`);
}

tennisRanklist(['4', '750', 'SF', 'W', 'SF', 'W']);
