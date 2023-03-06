function mountainRun(input) {
  //     1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
  // 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
  // 3.	Времето в секунди, за което изкачва 1 м. – реално число в интервала [0.00 … 1000.00]

  const reckordsInSeconds = Number(input[0]);
  const lengthInMeters = Number(input[1]);
  const timeInSecondsForAMeter = Number(input[2]);

  let secondsNeeded = lengthInMeters * timeInSecondsForAMeter;
  let secondsToAdd = Math.floor(lengthInMeters / 50);
  secondsToAdd = secondsToAdd * 30;
  let allSeconds = secondsNeeded + secondsToAdd;
  let diff = Math.abs(allSeconds - reckordsInSeconds);

  if (allSeconds >= reckordsInSeconds) {
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  } else {
    console.log(`Yes! The new record is ${allSeconds.toFixed(2)} seconds.`);
  }
}

// mountainRun(["10164", "1400", "25"]);
mountainRun(['5554.36', '1340', '3.23']);
