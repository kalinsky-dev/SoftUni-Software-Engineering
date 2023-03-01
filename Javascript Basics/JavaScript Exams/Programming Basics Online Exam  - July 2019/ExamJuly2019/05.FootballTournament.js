function footballTournament(input) {
  const length = Number(input.length);
  //   console.log(length);
  let wCount = 0;
  let dCount = 0;
  let lCount = 0;
  let resultType = '';
  let points = 0;
  let winPointsRate = 0;
  let otbor = input[0];

  for (let i = 2; i < length; i++) {
    resultType = input[i];
    if (resultType === 'W') {
      wCount++;
      points += 3;
    } else if (resultType === 'D') {
      dCount++;
      points += 1;
    } else if (resultType === 'L') {
      lCount++;
    }
  }
  winPointsRate = wCount + dCount + lCount;
  winPointsRate = (wCount / winPointsRate) * 100;
  if (input[1] == 0) {
    console.log(`${otbor} hasn't played any games during the season.`);
  } else {
    console.log(`${otbor} has won ${points} points during the season.`);
    console.log('Total stats:');
    console.log(`##W: ${wCount}`);
    console.log(`##D: ${dCount}`);
    console.log(`##L: ${lCount}`);
    console.log(`Win rate: ${winPointsRate.toFixed(2)}%`);
  }
}

footballTournament(['Barselona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D']);
