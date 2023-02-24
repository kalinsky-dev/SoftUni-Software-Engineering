function sleepyTomCat(input) {
  const hollyDays = Number(input[0]);
  const workingDays = 365 - hollyDays;

  //   •	Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
  // •	Когато почива, стопанинът му си играе с него  по 127 минути на ден.

  const realTimeToPlay = workingDays * 63 + hollyDays * 127;

  const minutes = Math.abs(30000 - realTimeToPlay);
  const min = minutes % 60;
  const hour = Math.trunc(minutes / 60);

  if (realTimeToPlay <= 30000) {
    console.log(`Tom sleeps well`);
    console.log(`${hour} hours and ${min} minutes less for play`);
  } else {
    console.log(`Tom will run away`);
    console.log(`${hour} hours and ${min} minutes more for play`);
  }
}

sleepyTomCat(['113']);
