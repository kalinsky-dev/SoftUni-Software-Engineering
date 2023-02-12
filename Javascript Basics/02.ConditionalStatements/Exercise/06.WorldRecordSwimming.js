function worldReckordSwimming(input) {
  //     1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
  // 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
  // 3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]

  const recordInSeconds = Number(input[0]);
  const distanceInMeters = Number(input[1]);
  const timeInSecondsForAMeter = Number(input[2]);
  let timeForARecord = 0;

  //   Да се напише функция, която изчислява дали се е справил със задачата, като се има предвид,
  //   че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. Когато се изчислява колко пъти Иванчо ще се забави,
  //    в резултат на съпротивлението на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число.
  // Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд.

  const secondsToDelay = Math.floor(distanceInMeters / 15) * 12.5;
  let timeToSwim = distanceInMeters * timeInSecondsForAMeter + secondsToDelay;

  let difference = Math.abs(timeToSwim - recordInSeconds);

  if (recordInSeconds <= timeToSwim) {
    console.log(
      `No, he failed! He was ${difference.toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${timeToSwim.toFixed(
        2
      )} seconds.`
    );
  }
}

worldReckordSwimming(['55555.67', '3017', '5.03']);
